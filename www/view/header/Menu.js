// General packages
import React from 'react'
import css from '@styled-system/css'
import styled from '@emotion/styled'

// Common
import { P, Box, Flex, H3, Button, NavLink } from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'
import { mediaUp, mediaDown } from 'styles/utils'
import { RouteLink } from 'common/RouteLink'
import { usePathStore, usePathActions } from 'common/hooks/hooks'

// Local
import { mainLinkStyle } from './styles'

export const Menu = props => {
    const showLogin = usePathActions('auth', 'showLogin')
    return (
        <Flex css={styles} {...props}>
            <Link prefetch route="about">
                ABOUT
            </Link>
            <Link prefetch route="course">
                sss COURSE
            </Link>
            <Link
                prefetch
                route="blog-feed"
                css={boxCss.css({
                    notmobile: true,
                })}
            >
                BLOG
            </Link>
            <Link
                prefetch
                route="faq"
                css={boxCss.css({
                    notmobile: true,
                })}
            >
                FAQ
            </Link>
            <Link prefetch route="contact-us">
                CONTACT US
            </Link>
            <LoginLink
                onClick={showLogin}
                css={boxCss.css({
                    onlymobile: true,
                })}
            >
                LOG IN
            </LoginLink>
        </Flex>
    )
}

const styles = css({
    [mediaUp('md')()]: {
        justifyContent: 'space-between',
        pt: 6,
        maxWidth: '570px',
        zIndex: '100',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        top: 0,
        right: 0,
    },
    [mediaDown('md')()]: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: '100',
        height: '56px',
        bg: 'light-normal',
    },
})

const linkStyles = boxCss.css({
    ...mainLinkStyle,
    pb: '4px',
    [mediaDown('md')()]: {
        pl: '3px',
        pr: '3px',
        pb: '1px',
        pt: '3px',
        color: 'dark-normal',
    },
})

const Link = styled(RouteLink)(linkStyles)
const LoginLink = styled(NavLink)(linkStyles)
