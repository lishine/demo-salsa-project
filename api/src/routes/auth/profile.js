import isEmpty from 'lodash/isEmpty'

import { throwError, throwIf } from 'utils/error'
import { find, queryDb } from 'utils/utils'
import { isAuth } from './isAuth'

const getUser = props =>
    queryDb(
        /* GraphQL */ `
            query getUser($userId: Int!) {
                users(where: { id: { _eq: $userId } }) {
                    id
                    email
                    profile {
                        name
                        dont_send_emails
                    }
                }
            }
        `,
        props
    ).then(d => d.users[0] || {})

export const profile = async ({ body, host, req, res }) => {
    console.log('profile body', body)

    let { user } = await isAuth({ body, host, req, res })
    const { profile, ..._user } = await getUser({ userId: user.id })

    return { user: { ...profile[0], ..._user } }
}
