import isEmpty from 'lodash/isEmpty'

import { throwError, throwIf } from 'utils/error'
import { queryDb } from 'utils/utils'
import { createAccessToken, decodeToken } from './common/token'
import { createCookie, getCookie } from './common/cookie'
import { destroyCookie } from 'nookies'

export const isAuth = async ({ body, req, res }) => {
    console.log('isAuth body', body)
    let token =
        body.token || (req.headers.Authorization && req.headers.Authorization.token)
    if (!token) {
        token = getCookie(req)[process.env.TOKEN_COOKIE_NAME]
        console.log('req.headers.cookie', req.headers.cookie)
        console.log('token', token)
    }

    throwIf(!token, 400, 'No token')()

    const { userId, expireIn, timestamp } = decodeToken(token, 'access')
    const now = new Date().getTime()

    console.log('{ userId, expireIn, timestamp }', {
        userId,
        expireIn,
        timestamp,
    })
    console.log('now', now)
    console.log('timestamp + expireIn - now', timestamp + expireIn - now)

    if (timestamp + expireIn < now) {
        destroyCookie(res, 'sbsToken')
        console.log('DESTROYING COOKIE')
        throwIf(true, 400, 'NO AUTHORIZATION')
    }

    return { user: { id: userId } }
}
