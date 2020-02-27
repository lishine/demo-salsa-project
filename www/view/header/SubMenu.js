// Node-Modules
import React from 'react'
import styled from '@emotion/styled'

// Common
import { Flex, NavLink } from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'
import { RouteLink } from 'common/RouteLink'
import { usePathStore, usePathActions } from 'common/hooks/hooks'

export const SubMenu = React.forwardRef((___props, ref) => {
    const logout = usePathActions('auth', 'logout')

    return (
        <Flex
            ref={ref}
            position="absolute"
            right={0}
            top="50px"
            zIndex={100}
            flexDirection="column"
            bg="white"
            width="208px"
            py={3}
            mt={2}
            boxShadow="0 0 0 1px rgba(0,0,0,0.06), 0 14px 28px -4px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.13)"
        >
            <Link prefetch route="my-course">
                MY COURSE
            </Link>
            <Link prefetch route="my-profile">
                MY PROFILE
            </Link>
            <LogoutLink onClick={logout}>LOGOUT</LogoutLink>
        </Flex>
    )
})

const linkStyle = boxCss.css({
    text: 'menu',
    mx: 2,
    px: 2,
    py: '4px',
    color: 'onwhite-menu',
    ':hover': {
        textDecoration: 'none',
        color: 'dark-normal',
        bg: 'primary',
    },
})

const Link = styled(RouteLink)(linkStyle)
const LogoutLink = styled(NavLink)(linkStyle)
