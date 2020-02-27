// Node - Modules
import React from 'react'

// Common
import { P, Box, Flex, Section, SvgIcon, Span, H3 } from 'styles/ss-components'
import { Map } from 'utils/utils'
import { NumberCircle, EightHours, VideoDownload } from 'common/svg/icons/index'

// Common
import { Task } from './Task'
import { WeekIndex } from './WeekIndex'
import { usePathStore } from 'common/hooks/hooks'

export const Tasks = props => {
    const { menu, numberOfTasks, totalDuration } = usePathStore('common', 'data.program')

    return (
        <Box {...props}>
            <Flex
                flexDirection={['column', 'row']}
                justifyContent="space-between"
                alignItems={['flex-start', 'flex-end']}
            >
                <H3 mb={[1, 0]} className="course">
                    <strong>WHAT</strong> YOU'LL LEARN
                </H3>
                <Box color="onwhite-muted">
                    <SvgIcon mr={1}>
                        <VideoDownload fill="var(--onwhite-muted)" />
                    </SvgIcon>
                    {numberOfTasks} lessons
                    <SvgIcon ml={1} mr={1}>
                        <EightHours fill="var(--onwhite-muted)" />
                    </SvgIcon>
                    {totalDuration}
                </Box>
            </Flex>

            <Flex pt={3} flexDirection="column">
                <Section
                    display={['none', 'inline-block']}
                    ml="4px"
                    mb="-10px"
                    color="onwhite-muted"
                >
                    Weeks
                </Section>
                <Map collection={menu.weeks}>
                    {(week, weekIndex) => (
                        <Flex justifyContent="space-between">
                            <WeekIndex
                                pr={6}
                                display={['none', 'inline-block']}
                                indexWeek={weekIndex + 1}
                            />
                            <Box flex={1}>
                                <Map collection={week}>
                                    <Task py={1} />
                                </Map>
                            </Box>
                        </Flex>
                    )}
                </Map>
            </Flex>
        </Box>
    )
}

