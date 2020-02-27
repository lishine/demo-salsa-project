import isEmpty from 'lodash/isEmpty'

import { decodeToken } from './common/token'
import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'

const getUserById = props =>
	queryDb(
		/* GraphQL */ `
			query getUserById($userId: Int!) {
				users(where: { id: { _eq: $userId } }) {
					confirmed
				}
			}
		`,
		props
	)
		.then(d => d.users[0] || {})
		.then(throwIf(isEmpty, 400, 'No found'))

const setUserConfirmed = props => {
	return queryDb(
		/* GraphQL */ `
			mutation setUserConfirmed($userId: Int!) {
				update_users(where: { id: { _eq: $userId } }, _set: { confirmed: true }) {
					affected_rows
				}
			}
		`,
		props
	)
}

export async function registerConfirm({ body }) {
	const { token } = body
	throwIf(!token, 400, 'No token')()
	console.log('token', token)

	const { userId, register, expireIn, timestamp } = decodeToken(token, 'email')
	throwIf(!register, 400, 'Not a registration link')()
	const now = new Date().getTime()
	throwIf(timestamp + expireIn < now, 400, 'Token expired')()

	await getUserById({ userId }).then(
		throwIf(({ confirmed }) => confirmed, 400, 'Account already confirmed')
	)
	await setUserConfirmed({ userId }).catch(throwError(500, 'error updating user'))
	return { confirmed: true }
}
