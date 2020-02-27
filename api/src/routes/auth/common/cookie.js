import nookies from 'nookies'

export const createCookie = (res, token) =>
    nookies.set({ res }, process.env.TOKEN_COOKIE_NAME, token, {
        maxAge: (1 * process.env.ACCESS_TOKEN_EXPIRE_IN) / 1000,
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    })

export const getCookie = req => nookies.get({ req })
