import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'
import isEmpty from 'lodash/isEmpty'
import { createEmailToken } from './common/token'
import { deliever } from 'lib/email/utils/deliever'

const getUserByEmail = props =>
    queryDb(
        /* GraphQL */ `
            query getUserByEmail($email: String!) {
                users(where: { email: { _eq: $email } }) {
                    id
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

export async function forgotPassword({ body, host }) {
    console.log('forgotPassword body', body)
    let { email } = body
    throwIf(!email, 400, 'no email provided')()

    email = email.trim()

    const user = await getUserByEmail({ email })
    console.log('user', user)

    const token = createEmailToken({ userId: user.id, isChangePassword: true })
    const url = process.env.SITE_URL
    const link = `${url}/login/change-password?token=${token}`
    const { name } = user.profile[0]
    const info = await deliever({
        name,
        email,
        subject: 'New password link',
        template: 'newPassword',
        templateParams: { name, link, email },
    }).catch(throwError(400, 'Email not sent'))

    return { info }
}
