import pbkdf2 from 'pwd'
import isEmpty from 'lodash/isEmpty'

import { queryDb } from 'utils/utils'
import { throwIf, throwError } from 'utils/error'
import { emailRegisterConfirmLink } from './common/email'
import { createAccessToken } from './common/token'
import { createCookie } from './common/cookie'

const getUserByEmail = props =>
	queryDb(
		/* GraphQL */ `
			query getUserByEmail($email: String!) {
				users(where: { email: { _eq: $email } }) {
					id
					confirmed
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

const newRefreshToken = props =>
	queryDb(
		/* GraphQL */ `
			mutation newRefreshToken($userId: Int!, $expireIn: Int!) {
				insert_refresh_tokens(objects: [{ user_id: $userId, expire_in: $expireIn }]) {
					returning {
						id
					}
				}
			}
		`,
		props
	).then(d => d.insertRefreshTokens.returning[0])

export async function signIn({ body, host, res, req }) {
	console.log('headers', req.headers)
	console.log('IN SIGN-IN')
	const { email, password, sendRegLink, needToken } = body
	throwIf(!email || !password, 400, 'No password or email')()

	const user = await getUserByEmail({ email })

	if (!user.confirmed) {
		throwIf(!sendRegLink, 400, 'User not confirmed', 100)()
		const info = await emailRegisterConfirmLink({
			userId: user.id,
			host,
			name: user.profile[0].name,
			email,
		}).catch(throwError(400, 'Email not sent'))
		return { info }
	}

	const { hash } = await pbkdf2.hash(password, user.salt)
	throwIf(hash !== user.password, 400, 'Unauthorized Access')()

	const { id } = await newRefreshToken({
		userId: user.id,
		expireIn: process.env.REFRESH_TOKEN_EXPIRE_IN,
	})
	const token = createAccessToken({
		userId: user.id,
		refreshTokenId: id,
	})

	if (needToken) {
		return { token }
	} else {
		console.log('adding cookie')
		createCookie(res, token)
	}

	return { ok: true }
}
