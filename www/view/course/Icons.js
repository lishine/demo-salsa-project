// Node - Modules
import React, { useEffect } from 'react'

// Common
import { P, Box, Flex, H1, H4, Section, SvgIcon } from 'styles/ss-components'
import { Map } from 'utils/utils'

// Common
import * as icons from 'common/svg/icons/index'
import { usePathStore } from 'common/hooks/hooks'

const localData = [
    { icon: 'Calendar' },
    { icon: 'Time' },
    { icon: 'EightHours' },
    { icon: 'VideoDownload' },
    { icon: 'NoRequirements' },
    { icon: 'Lifetime' },
]

const path = 'course'

export const Icons = props => {
    const data = usePathStore(path, 'data')
    const { iconsText } = data

    return (
        <Flex
            {...props}
            height={[null, 112]}
            flexDirection="column"
            alignContent="flex-start"
            flexWrap={['no-wrap', 'wrap']}
        >
            <Map collection={iconsText}>
                {(text, index) => {
                    const Icon = icons[localData[index].icon]
                    return (
                        <Flex mt={1} mr="2">
                            <SvgIcon mr={1} transform="translateY(-2px)">
                                <Icon fill="var(--primary)" />
                            </SvgIcon>
                            {text}
                        </Flex>
                    )
                }}
            </Map>
        </Flex>
    )
}
