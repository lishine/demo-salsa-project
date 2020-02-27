// Node - Modules
import React from 'react'

// Common
import { SvgIcon, Span, H3 } from 'styles/ss-components'
import { NumberCircle } from 'common/svg/icons/index'

export const WeekIndex = ({ indexWeek, ...props }) => (
    <SvgIcon position="relative" m="auto" {...props}>
        <NumberCircle />
        <Span
            position="absolute"
            left="18px"
            top="2px"
            color="light-normal"
            fontSize={35}
        >
            {indexWeek}
        </Span>
    </SvgIcon>
)
