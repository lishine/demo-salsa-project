import { emailNewPasswordLink } from './common/email'
import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'
import isEmpty from 'lodash/isEmpty'

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
	const { email } = body
	console.log('email', email)
	throwIf(!email, 400, 'no email provided')()

	const user = await getUserByEmail({ email })
	console.log('user', user)

	const info = await emailNewPasswordLink({
		userId: user.id,
		host,
		name: user.profile[0].name,
		email,
	}).catch(throwError(400, 'Email not sent'))

	return { info }
}
