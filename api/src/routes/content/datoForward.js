import { post } from 'utils/utils'
import { throwIf, throwError } from 'utils/error'
import { isAuth } from 'routes/auth/isAuth'

export const datoForward = async ({ body, req, res }) => {
    console.log('body', body.query)

    const userRequired = RegExp(/program.*page/i).test(body.query)
    console.log('userRequired', userRequired)

    if (userRequired) {
        try {
            await isAuth({ body, req, res })
        } catch (error) {
            throwError(400, 'NOT AUTHORIZED')()
        }
    }
    return post(process.env.DATO_GRAPHQL_URL, body, {
        Authorization: process.env.DATO_API_TOKEN,
    })
}
