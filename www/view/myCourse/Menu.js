// Node - Modules
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

// Common
import { Box, Flex, Section, OL, DT, NavLink, SvgIcon, Span } from 'styles/ss-components'
import { Map, Loading } from 'utils/utils'
import { CheckXl } from 'common/svg/icons/CheckXl'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { boxCss } from 'styles/ss-utils'
import { mediaDown, mediaUp, mediaBetween } from 'styles/utils'
import { usePopup } from 'common/hooks/usePopup'
import { ChevronDown } from 'common/svg/icons/index'

// Local
import { path } from './MyCourse'
import { Progress } from './Progress'

// Menu
const Weeks = OL
const Week = DT
const WeekTitle = Section
const WeekTasks = Section

const menuBoxShadow =
    '0 14px 28px -4px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.13);'

export const Menu = props => {
    const [refMenu, refTrigger, isMenuOpen, toggleMenu] = usePopup({
        clickAnywhereToClose: true,
    })

    const { menu } = usePathStore('common', 'data.program')
    const navigatePage = usePathActions(path, 'navigatePage')
    const tasksCompleted = usePathStore(path, 'tasksCompleted')
    const currentPageId = usePathStore(path, 'pageId')

    const Link = ({ pageId, ...props }) => (
        <NavLink
            {...props}
            pl={4}
            py="4px"
            display="block"
            bg={currentPageId === pageId ? '#F2F2F2' : null}
        />
    )

    return (
        <Box {...props} as="nav">
            <Box pt={2}>
                <Flex
                    display={['flex', 'flex', 'none']}
                    flexDirection={['row', 'column']}
                >
                    <Flex
                        py={1}
                        bg="primary"
                        alignItems="center"
                        flexDirection="column"
                        flex={[1, 0]}
                    >
                        <Progress />
                    </Flex>
                    <Flex
                        flex={[1, 0]}
                        ref={refTrigger}
                        onClick={toggleMenu}
                        cursor="pointer"
                        justifyContent="center"
                        alignItems="center"
                        py={1}
                        bg="primary-1"
                    >
                        Lessons
                        <SvgIcon ml="0.25em">
                            <ChevronDown />
                        </SvgIcon>
                    </Flex>
                </Flex>

                <Box position="relative" pt={4}>
                    <Flex
                        display={['none', 'none', 'flex']}
                        bg="primary"
                        pl={5}
                        py={1}
                        alignItems="flex-end"
                    >
                        <Progress />
                    </Flex>
                    <Box
                        px={1}
                        pt={3}
                        pb={2}
                        display={[isMenuOpen ? 'block' : 'none', null, 'block']}
                        ref={refMenu}
                        bg="light-normal"
                        left={[null, 0]}
                        right={[0, null]}
                        boxShadow={menuBoxShadow}
                        css={boxCss.css(theme => ({
                            [mediaDown('lg')()]: {
                                position: 'absolute',
                                zIndex: 200,
                                top: 0,
                                width: '345px',
                                maxWidth: `calc(100vw - ${theme.paddingContainer}px - 12px)`,
                                boxShadow: `inset 0 4px 0 0 #00CCCC, ${menuBoxShadow}`,
                            },
                        }))}
                    >
                        <OL>
                            <Map collection={menu.before}>
                                {({ text, pageId }) => (
                                    <DT>
                                        <Link
                                            pageId={pageId}
                                            onClick={() =>
                                                navigatePage({
                                                    pageId,
                                                })
                                            }
                                            textIndent={false}
                                        >
                                            {text}
                                        </Link>
                                    </DT>
                                )}
                            </Map>
                        </OL>
                        <Weeks>
                            <Map collection={menu.weeks}>
                                {(week, weekIndex) => (
                                    <Week mt={3}>
                                        <WeekTitle py="4px" pl={4}>
                                            Week {weekIndex + 1}
                                        </WeekTitle>
                                        <WeekTasks>
                                            <Map collection={week}>
                                                {({ text, taskNumber, pageId }) => (
                                                    <Link
                                                        pageId={pageId}
                                                        onClick={() =>
                                                            navigatePage({
                                                                pageId,
                                                                taskNumber,
                                                            })
                                                        }
                                                    >
                                                        <SvgIcon ml="-28px" mr="2px">
                                                            <CheckXl
                                                                width={23}
                                                                checked={tasksCompleted.find(
                                                                    task =>
                                                                        task.number ===
                                                                        taskNumber
                                                                )}
                                                            />
                                                        </SvgIcon>{' '}
                                                        <Span>
                                                            {`${taskNumber}`.padStart(
                                                                2,
                                                                '0'
                                                            )}
                                                            . {text}
                                                        </Span>
                                                    </Link>
                                                )}
                                            </Map>
                                        </WeekTasks>
                                    </Week>
                                )}
                            </Map>
                        </Weeks>
                        <OL pt={3}>
                            <Section py="4px" pl={4}>
                                Resources
                            </Section>
                            <Map collection={menu.after}>
                                {({ text, pageId }) => (
                                    <DT>
                                        <Link
                                            pageId={pageId}
                                            onClick={() =>
                                                navigatePage({
                                                    pageId,
                                                })
                                            }
                                            textIndent={false}
                                        >
                                            {text}
                                        </Link>
                                    </DT>
                                )}
                            </Map>
                        </OL>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
