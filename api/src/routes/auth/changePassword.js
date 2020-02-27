import pbkdf2 from 'pwd'
import isEmpty from 'lodash/isEmpty'

// Common
import { decodeToken } from './common/token'
import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'

// Local
import { deliever } from 'lib/email/utils/deliever'
import { isAuth } from './isAuth'
import { logMeIn } from './common/logMeIn'

const getUserById = props =>
    queryDb(
        /* GraphQL */ `
            query getUserById($userId: Int!) {
                users(where: { id: { _eq: $userId } }) {
                    id
                    email
                    salt
                    password
                    profile {
                        name
                    }
                }
            }
        `,
        props
    )
        .then(d => d.users[0] || {})
        .then(throwIf(isEmpty, 400, 'Not found'))

const updateUserPassword = props => {
    return queryDb(
        /* GraphQL */ `
            mutation updateUserPassword(
                $userId: Int!
                $password: String!
                $salt: String!
            ) {
                update_users(
                    where: { id: { _eq: $userId } }
                    _set: { password: $password, salt: $salt }
                ) {
                    affected_rows
                }
            }
        `,
        props
    )
}

export async function changePassword({ body, host, req, res }) {
    let { currentPassword, newPassword, token } = body
    console.log('changePassword body', body)
    throwIf(!currentPassword || !newPassword, 400, 'No password or email')()

    currentPassword = currentPassword.trim()
    newPassword = newPassword.trim()
    throwIf(currentPassword === newPassword, 400, 'New password must be different')()

    let userId, isChangePassword, expireIn, timestamp
    if (token) {
        ;({ userId, isChangePassword, expireIn, timestamp } = decodeToken(token, 'email'))
        throwIf(!isChangePassword, 400, 'Not a new password link')()
        const now = new Date().getTime()
        throwIf(timestamp + expireIn < now, 400, 'Token expired')()
    } else {
        ;({
            user: { id: userId },
        } = await isAuth({ body, req, res }))
    }

    const user = await getUserById({ userId })

    const { hash: currentHash } = await pbkdf2.hash(currentPassword, user.salt)
    throwIf(currentHash !== user.password, 400, 'Wrong current password')()

    const { hash, salt } = await pbkdf2.hash(newPassword)
    await updateUserPassword({ userId, password: hash, salt }).catch(
        throwError(400, 'update user password failed')
    )

    const { email, profile } = user
    const { name } = profile[0]
    const info = await deliever({
        name,
        email,
        subject: 'Password Changed',
        template: 'passwordChanged',
        templateParams: { name, email },
    }).catch(throwError(400, 'Email not sent'))

    if (token) {
        await logMeIn(user.id, res)
    }
    return { info }
}
