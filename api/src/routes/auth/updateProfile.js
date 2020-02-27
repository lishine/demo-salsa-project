import isEmpty from 'lodash/isEmpty'

import { throwError, throwIf } from 'utils/error'
import { find, queryDb } from 'utils/utils'
import { isAuth } from './isAuth'

const updateUser = props => {
    return queryDb(
        /* GraphQL */ `
            mutation updateUser(
                $userId: Int!
                $email: String!
                $name: String!
                $dontSendEmails: Boolean!
            ) {
                update_users(where: { id: { _eq: $userId } }, _set: { email: $email }) {
                    affected_rows
                }
                update_user_profiles(
                    where: { user_id: { _eq: $userId } }
                    _set: { name: $name, dont_send_emails: $dontSendEmails }
                ) {
                    affected_rows
                }
            }
        `,
        props
    )
}

export const updateProfile = async ({ body, req, res }) => {
    console.log('updateProfile body', body)
    let { name, email, dontSendEmails } = body.values || {}
    throwIf(!email || !name, 400, 'No email or name')()
    email = email.trim()
    name = name.trim()

    let { user } = await isAuth({ body, req, res })

    await updateUser({ userId: user.id, name, email, dontSendEmails })

    return {}
}
