import React from 'react'
import { useStore } from 'easy-peasy'
import { router } from 'routes'

export const RouteLink = ({ decorate, style, route, className, children, ...props }) => {
    const asPath = useStore(state => state.router.asPath)

    const currentRoute = useStore(state => state.router.route)
    route = route || currentRoute

    const { Link, getRoutePath } = router
    const href = getRoutePath(route, props)

    if (asPath === href) {
        className = `${className || ''} active`
    }

    style = style || {}
    style.textDecoration = decorate ? 'underline' : 'none'

    return (
        <Link {...{ route }} {...props} prefetch shallow>
            <a style={style} className={className}>
                {children}
            </a>
        </Link>
    )
}
