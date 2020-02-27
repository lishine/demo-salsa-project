import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { MapFormikProps } from '../utils/MapFormikProps'
import { Svg, P, Span, Box } from 'styles/ss-components'

import * as icons from 'common/svg/icons/index'

const LeftIcon = ({ field: { leftIcon } }) => {
    const Icon = icons[leftIcon]

    return !Icon ? null : (
        <Svg position="absolute" left="11px" pointerEvents="none">
            <Icon fill="var(--color, var(--dark-muted))" />
        </Svg>
    )
}

const RightIcon = ({ visibility, setVisibility, status, field: { name, type } }) => {
    let Icon
    if (name.includes('password')) {
        Icon = visibility ? icons.Visibility : icons.VisibilityOff
        type = visibility ? 'text' : 'password'
    } else if (status === 'error') {
        Icon = icons.ExclamationSolid
    } else if (status === 'valid') {
        Icon = icons.CheckMd
    }

    return !Icon ? null : (
        <Svg right="11px" position="absolute" onClick={() => setVisibility(!visibility)}>
            <Icon fill="var(--color, var(--dark-muted))" />
        </Svg>
    )
}

const StyledInput = styled.input`
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
    height: 3em;
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

export const Input = props => (
    <MapFormikProps {...props}>
        {({ error, ...props }) => {
            const [visibility, setVisibility] = useState(false)

            const { status } = props

            const { field } = props
            field.type = field.type || 'text'

            return (
                <>
                    <Box position="relative" display="flex" alignItems="center">
                        <LeftIcon {...props} />
                        <StyledInput status={status} {...field} />
                        <RightIcon {...{ visibility, setVisibility, ...props }} />
                    </Box>
                    {status === 'error' && <Box mt={1}>{error}</Box>}
                </>
            )
        }}
    </MapFormikProps>
)
