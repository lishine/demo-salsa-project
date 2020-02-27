// import initSubscriber from 'redux-subscriber'
import React from 'react'
import Head from 'next/head'
import { withRouter, default as nextRouter } from 'next/router'
import withRedux from 'next-redux-wrapper'
import cookie from 'cookie'
import { destroyCookie } from 'nookies'
import jwtDecode from 'jwt-decode'
import App, { Container } from 'next/app'
import { useStore, useActions, StoreProvider } from 'easy-peasy'
import { ThemeProvider } from 'emotion-theming'
import camelCase from 'lodash/camelCase'

import { router, isPublicPage, findPage, getRoute } from 'routes'
import { post } from 'utils/fetch'
import { sleep } from 'utils/utils'
import { makeStore } from 'view/makeStore'
import { GlobalCss, theme } from 'styles/theme'
import { Header } from 'view/header/Header'
import { Footer } from 'view/footer/Footer'

import 'scss/index.scss'
import { Modals } from 'view/Modals'
import { Loading } from 'view/Loading'
import { Box, Flex } from 'styles/ss-components'

export let store
const setStore = _store => (store = _store)

export const redirect = (ctx, path) => {
    if (process.browser) {
        nextRouter.push(path)
    } else {
        ctx.res.writeHead(301, { Location: path })
        ctx.res.end()
    }
}

const setRouter = ({ store, pathname, query, asPath }) => {
    store.dispatch.router.set({
        pathname,
        query,
        asPath: asPath.split('?')[0],
        route: getRoute(asPath),
    })
}

export let globalCtx

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        globalCtx = ctx
        const { store, pathname, query, asPath } = ctx
        store.dispatch.reset()
        setRouter({ store, pathname, query, asPath })

        if (!process.browser) {
            console.log('* NOT in browser')
            if (asPath === '/logout') {
                console.log('pushing logout')
                destroyCookie(ctx, 'demo1Token')
                await store.dispatch.auth.showLogin()
                redirect(ctx, '/')
            } else {
                try {
                    const parsed = cookie.parse(ctx.req.headers.cookie) || {}
                    const token = parsed[process.env.TOKEN_COOKIE_NAME]
                    console.log('token', token)
                    const { expireIn, timestamp } = jwtDecode(token)
                    const now = new Date().getTime()
                    if (timestamp + expireIn < now) {
                        console.log('Acess token is expired')
                        const { err, timeOut, data } = await post({
                            url: `${process.env.API_URL}/api/auth/is-auth`,
                        })
                        if (data) {
                            await store.dispatch.auth.enter()
                            console.log('success isAuth, maybe new cookie...')
                        } else {
                            console.log(err)
                            console.log('Authentication error')
                            destroyCookie(ctx, process.env.TOKEN_COOKIE_NAME)
                        }
                    } else {
                        await store.dispatch.auth.enter()
                    }
                } catch (error) {
                    console.log('No token')
                }
            }
        }

        if (!process.browser) {
            await store.dispatch.common.loadCommon()
        }
        const pageProps =
            (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) || {}

        let authorized = false
        if (store.getState().auth.isAuth || isPublicPage(pathname)) {
            authorized = true
        }

        pageProps.authorized = authorized
        console.log('authorized', authorized)
        return { pageProps }
    }
    constructor(props) {
        super(props)
        store = props.store
        if (process.browser) {
            console.log('* BROWSER in constructor')
        } else {
            console.log('* SERVER in constructor')
        }
    }
    render() {
        const { Component, pageProps, store } = this.props
        const { authorized } = pageProps

        if (process.browser) {
            console.log('$ BROWSER in render _app')

            const { pathname, query, asPath } = this.props.router
            console.log('{ pathname, query, asPath }', {
                pathname,
                query,
                asPath,
            })
            setRouter({ store, pathname, query, asPath })
        } else {
            console.log('$ SERVER in render _app')
        }

        console.log('store.router', store.getState().router)

        let title, description
        const route = camelCase(store.getState().router.route)
        if (route) {
            const pageStore = store.getState()[route]
            if (pageStore) {
                ;({ title, seoDescription: description } = pageStore.data | {})
            }
        }
        title = title || store.getState().common.data.general.title
        description = description || store.getState().common.data.general.description
        const { titleSuffix } = store.getState().common.data.general
        const { favicon } = store.getState().common.data.general
        title = title.toUpperCase()

        return (
            <Container>
                <Head>
                    <title>{`${title} ${titleSuffix}`}</title>
                    <meta name="description" content={description} />
                    <meta
                        charSet="utf-8"
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,700|Oswald:300,400,500|Permanent+Marker"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/x-icon" href={favicon.url} />
                </Head>
                <StoreProvider store={store}>
                    <ThemeProvider theme={theme}>
                        <GlobalCss />
                        <Flex flexDirection="column" className="page-container">
                            <Modals />
                            <Header />
                            <Flex flexDirection="column" pb={[318, 536]} flex={1}>
                                {authorized ? (
                                    <Component store={store} {...pageProps} />
                                ) : (
                                    <Flex pt={17} justifyContent="center">
                                        NOT AUTHORIZED
                                    </Flex>
                                )}

                                <Footer />
                            </Flex>
                        </Flex>
                    </ThemeProvider>
                </StoreProvider>
            </Container>
        )
    }
}

export default withRedux(makeStore, { debug: false })(withRouter(MyApp))
