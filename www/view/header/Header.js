// Node - Modules
import React from 'react'
import styled from '@emotion/styled'
import { useStore } from 'easy-peasy'

// Common
import { RouteLink } from 'common/RouteLink'
import { P, Box, Svg, Span, Flex } from 'styles/ss-components'
import { Logo } from 'common/svg/Logo'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { boxCss } from 'styles/ss-utils'

// Local
import { Menu } from './Menu'
import { LoginLink } from './LoginLink'
import { mediaUp } from 'styles/utils'

const routesWithHero = ['home', 'course']

export const Header = ({ hero }) => {
    const route = usePathStore('router', 'route')

    let isStatic = true
    if (routesWithHero.includes(route)) {
        isStatic = false
    }

    return (
        <Box>
            <Box
                className="grid-container"
                maxWidth={[null, null, null, 1920]}
                css={styles({ isStatic })}
            >
                <Flex
                    px={[2, 4, '3.6%', 8]}
                    pt={3}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <RouteLink route="home">
                        <Logo />
                    </RouteLink>
                    <LoginLink mt={3} />
                </Flex>
            </Box>
            <Menu />
        </Box>
    )
}

const styles = ({ isStatic }) =>
    boxCss.css(
        !isStatic
            ? {
                  position: 'absolute',
                  zIndex: 90,
                  top: 0,
                  left: '50%',
                  transform: 'translate(-50%, 0)',
              }
            : {
                  height: '120px',
                  backgroundColor: '#000',
                  backgroundImage: `linear-gradient(#000 0%, rgba(0, 0, 0, 0.5) 33%, rgba(0, 0, 0, 0) 100%),url('/static/img/header-bg.jpg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top center',
              }
    )
