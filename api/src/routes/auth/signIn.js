import pbkdf2 from 'pwd'
import isEmpty from 'lodash/isEmpty'

import { find, queryDb } from 'utils/utils'
import { throwIf, throwError } from 'utils/error'
import { logMeIn } from './common/logMeIn'

const getUserByEmail = props =>
    queryDb(
        /* GraphQL */ `
            query getUserByEmail($email: String!) {
                users(where: { email: { _eq: $email } }) {
                    id
                    confirmed
                    paid
                    password
                    salt
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

const USER_PAYMENT_REQUIRED = true

export async function signIn({ body, host, res, req }) {
    console.log('sign-in body', body)
    console.log('headers', req.headers)
    let { email } = body
    let password = find((value, key) => key.match(/password/i))(body)
    throwIf(!email || !password, 400, 'No password or email')()

    email = email.trim()
    password = password.trim()

    const user = await getUserByEmail({ email })

    throwIf(USER_PAYMENT_REQUIRED && !user.paid, 400, 'user not paid')()

    const { hash } = await pbkdf2.hash(password, user.salt)
    throwIf(hash !== user.password, 400, 'Unauthorized Access')()

    await logMeIn(user.id, res)

    return { ok: true }
}
