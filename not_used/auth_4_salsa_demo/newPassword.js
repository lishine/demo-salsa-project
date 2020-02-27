import pbkdf2 from 'pwd'
import isEmpty from 'lodash/isEmpty'

import { decodeToken } from './common/token'
import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'

const getUserById = props =>
	queryDb(
		/* GraphQL */ `
			query getUserById($userId: Int!) {
				users(where: { id: { _eq: $userId } }) {
					id
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
			mutation updateUserPassword($userId: Int!, $password: String!, $salt: String!) {
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

export async function newPassword({ body }) {
	const { password, passwordConfirmation, token } = body
	throwIf(!password || !passwordConfirmation || !token, 400, 'No password or email')()
	throwIf(password !== passwordConfirmation, 400, 'No password or email')()
	console.log('password passwordConfirmation token', password, passwordConfirmation, token)

	const { userId, newPassword, expireIn, timestamp } = decodeToken(token, 'email')
	throwIf(!newPassword, 400, 'Not a new password link')()
	const now = new Date().getTime()
	throwIf(timestamp + expireIn < now, 400, 'Token expired')()

	await getUserById({ userId })

	const { hash, salt } = await pbkdf2.hash(password)
	await updateUserPassword({ userId, password: hash, salt }).catch(
		throwError(400, 'update user password failed')
	)

	return { updated: true }
}
