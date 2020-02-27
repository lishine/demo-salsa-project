import pbkdf2 from 'pwd'

import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'
import { emailRegisterConfirmLink } from './common/email'

const newUser = props => {
	return queryDb(
		/* GraphQL */ `
			mutation newUser(
				$email: String!
				$password: String!
				$salt: String!
				$name: String!
			) {
				insert_users(
					objects: [
						{
							email: $email
							password: $password
							salt: $salt
							profile: { data: { name: $name } }
						}
					]
				) {
					returning {
						id
					}
				}
			}
		`,
		props
	)
		.then(d => d.insertUsers.returning[0])
		.catch(err => {
			const { message } = err
			if (message.includes('duplicate') && message.includes('email')) {
				throwError(400, 'User already exists')(err)
			} else {
				throw err
			}
		})
}

export async function signUp({ body, host }) {
	const { name, email, password } = body
	throwIf(!email || !password || !name, 400, 'No password or email or name')()
	const { hash, salt } = await pbkdf2.hash(password)
	const user = await newUser({ email, password: hash, salt, name })
	const info = await emailRegisterConfirmLink({ userId: user.id, host, name, email }).catch(
		throwError(400, 'Email not sent')
	)
	return { user, info }
}
