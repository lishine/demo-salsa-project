// Node-modules
import React, { useState, useEffect } from 'react'
import { useStore, useActions } from 'easy-peasy'
// import onClickOutside from 'react-onclickoutside'

// Common
import { Box, Flex, SvgIcon, Span } from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'
import { Login, Person, ChevronDown } from 'common/svg/icons/index'
import { usePopup } from 'common/hooks/usePopup'

// Local
import { mainLinkStyle } from './styles'
import { SubMenu } from './SubMenu'

export const LoginLink = props => {
    const isAuth = useStore(state => state.auth.isAuth)
    const openModal = useActions(actions => actions.openModal)
    const profile = useStore(state => state.auth.profile)
    const [ref, triggerRef, isSubMenu, toggleSubMenu] = usePopup({
        clickAnywhereToClose: true,
    })

    const onClick = () => {
        if (isAuth) {
            toggleSubMenu()
        } else {
            openModal({
                component: 'Login',
                params: { form: 'SignIn' },
            })
        }
    }

    return (
        <Box position="relative" {...props}>
            <Flex
                ref={triggerRef}
                notmobile
                onClick={onClick}
                css={boxCss.css({
                    ...mainLinkStyle,
                    p: 1,
                    pr: 0,
                    pb: '4px',
                    color: 'light-normal',
                })}
            >
                {isAuth ? (
                    <>
                        <SvgIcon mr={[1]}>
                            <Person />
                        </SvgIcon>
                        {profile && profile.name}
                        <SvgIcon ml={[1]}>
                            <ChevronDown />
                        </SvgIcon>
                    </>
                ) : (
                    <>
                        <SvgIcon mr={[1]}>
                            <Login />
                        </SvgIcon>
                        LOG IN
                    </>
                )}
            </Flex>
            {isSubMenu && <SubMenu ref={ref} onClick={toggleSubMenu} />}
        </Box>
    )
}
