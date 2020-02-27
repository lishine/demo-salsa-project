import { post } from 'utils/utils'
import { isAuth } from 'routes/auth/isAuth'

export const dbForward = async ({ body, host, req, res }) => {
    let { user } = await isAuth({ body, host, req, res })

    console.log('body', body.query)
    return post(process.env.DB_GRAPHQL_URL, body, {
        'x-hasura-user-id': user.id,
        'x-hasura-role': 'user',
        'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    })
}
