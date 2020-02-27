import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { MapFormikProps } from '../utils/MapFormikProps'
import { Svg, P, Span, Box } from 'styles/ss-components'

import { Message } from 'common/svg/icons/index'

const LeftIcon = ({ field: { leftIcon } }) => {
    const Icon = Message

    return !Icon ? null : (
        <Svg position="absolute" left="11px" top="5px" pointerEvents="none">
            <Icon fill="var(--color, var(--dark-muted))" />
        </Svg>
    )
}

const StyledInput = styled.textarea`
    ${props =>
        props.status === 'error' &&
        css`
            --color: var(--danger);
            --border-width: 2px;
        `}
    ${props =>
        props.status === 'valid' &&
        css`
            --color: var(--success);
            --border-width: 2px;
        `}

    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    padding-left: 2.4em;

    &:focus {
        outline: 0;
        box-shadow: none;
        border: 2px solid var(--color, #b2c6ff);
        color: var(--color, var(--onwhite-normal));
    }

    border: var(--border-width, 1px) solid var(--color, var(--onwhite-border));
    color: var(--color, var(--onwhite-muted));

    &::placeholder {
        color: currentColor;
    }
`

export const InputMessage = props => (
    <MapFormikProps {...props}>
        {({ error, ...props }) => {
            const { status } = props

            const { field } = props

            return (
                <>
                    <Box h="100%" position="relative" display="flex" alignItems="center">
                        <LeftIcon {...props} />
                        <StyledInput status={status} {...field} />
                    </Box>
                    {status === 'error' && <Box mt={1}>{error}</Box>}
                </>
            )
        }}
    </MapFormikProps>
)
