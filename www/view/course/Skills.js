// Node - Modules
import React, { useEffect } from 'react'

// Common
import { Box, Flex, Section, SvgIcon, H3, Button, Span } from 'styles/ss-components'
import { Map } from 'utils/utils'
import { CheckMd } from 'common/svg/icons/index'
import { usePathStore } from 'common/hooks/hooks'

const path = 'course'

export const Skills = props => {
    const data = usePathStore(path, 'data')
    const { skills } = data

    return (
        <Box {...props}>
            <H3 className="course">
                <strong>SKILLS</strong> YOU WILL GAIN
            </H3>

            <Flex
                mt={3}
                height={[null, 112]}
                flexDirection="column"
                alignContent="flex-start"
                flexWrap={['no-wrap', 'wrap']}
            >
                <Map collection={skills}>
                    {text => (
                        <Flex mr="2">
                            <SvgIcon mr={1} transform="translateY(-2px)">
                                <CheckMd />
                            </SvgIcon>
                            {text}
                        </Flex>
                    )}
                </Map>
            </Flex>
        </Box>
    )
}
