import nookies from 'nookies'

export const logout = async ({ res }) => {
    console.log('LOGOUTING')
    console.log('destroying cookie')
    nookies.set({ res }, process.env.TOKEN_COOKIE_NAME, '', {
        maxAge: -1,
        path: '/',
        domain: process.env.COOKIE_DOMAIN,
    })
    return { ok: true }
}
