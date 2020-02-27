import isEmpty from 'lodash/isEmpty'

import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'
import { createAccessToken, decodeToken } from './common/token'
import { createCookie, getCookie } from './common/cookie'

const getRefreshToken = props => {
	return queryDb(
		/* GraphQL */ `
			query getRefreshToken($refreshTokenId: Int!) {
				refresh_tokens(where: { id: { _eq: $refreshTokenId } }) {
					access_token
					expire_in
					timestamp
				}
			}
		`,
		props
	).then(d => d.refreshTokens[0] || {})
}

const deleteRefreshToken = props => {
	return queryDb(
		/* GraphQL */ `
			mutation deleteRefreshToken($refreshTokenId: Int!) {
				delete_refresh_tokens(where: { id: { _eq: $refreshTokenId } }) {
					affected_rows
				}
			}
		`,
		props
	)
}

const updateAccessToken = props => {
	return queryDb(
		/* GraphQL */ `
			mutation updateAccessToken($refreshTokenId: Int!, $accessToken: String!) {
				update_refresh_tokens(
					where: { id: { _eq: $refreshTokenId } }
					_set: { access_token: $accessToken }
				) {
					affected_rows
				}
			}
		`,
		props
	)
}

export const isAuth = async ({ body, req, res }) => {
	let isCookie = false
	let token = body.token || (req.headers.Authorization && req.headers.Authorization.token)
	if (!token) {
		isCookie = true
		token = getCookie(req).token
		console.log('req.headers', req.headers)
		console.log('req.headers.cookie', req.headers.cookie)
		console.log('token', token)
	}

	throwIf(!token, 400, 'No token')()

	const { userId, refreshTokenId, expireIn, timestamp } = decodeToken(token, 'access')
	const now = new Date().getTime()

	console.log('{ userId, refreshTokenId, expireIn, timestamp }', {
		userId,
		refreshTokenId,
		expireIn,
		timestamp,
	})
	console.log('now', now)
	console.log('timestamp + expireIn - now', timestamp + expireIn - now)

	if (timestamp + expireIn < now) {
		const { accessToken, expireIn, timestamp } = await getRefreshToken({
			refreshTokenId,
		}).then(throwIf(isEmpty, 400, 'No AUTHORIZATION, refresh token not found'))
		const timestampInMS = new Date(timestamp).getTime()
		console.log('{ accessToken, expireIn, timestamp }', {
			accessToken,
			expireIn,
			timestampInMS,
		})

		// throwIf(accessToken && token !== accessToken, 400, 'Token not accepted')()

		console.log('timestampInMS + expireIn - now', timestampInMS + expireIn - now)

		if (timestampInMS + expireIn < now) {
			await deleteRefreshToken({ refreshTokenId }).catch(
				throwError(400, `delete refresh token ${refreshTokenId} failed`)
			)
			throwError(400, 'No AUTHORIZATION, refresh token expired')()
		}

		token = createAccessToken({ userId, refreshTokenId })
		// updateAccessToken({ refreshTokenId, accessToken: token })

		if (isCookie) {
			createCookie(res, token)
		} else {
			return { token }
		}
	}

	return { ok: true }
}
