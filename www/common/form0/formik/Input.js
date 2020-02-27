import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { MapFormikProps } from './MapFormikProps'
import { Svg, P, Span, Box } from 'styles/ss-components'

import {
    PersonOutline,
    Email,
    ExclamationSolid,
    Lock,
    Visibility,
    VisibilityOff,
    CheckMd,
} from 'common/svg/icons/index'

const leftIcons = {
    name: PersonOutline,
    email: Email,
    password: Lock,
}

const findIcon = name => icons => {
    const tuple = Object.entries(leftIcons).find(([key, Icon]) =>
        name.toLowerCase().includes(key)
    )
    return tuple && tuple[1]
}

const left = props => {
    let { name } = props.field

    const Icon = findIcon(name)(leftIcons)

    if (Icon) {
        return {
            Left: () => (
                <Svg position="absolute" left="11px" pointerEvents="none">
                    <Icon fill="var(--color, var(--dark-muted))" />
                </Svg>
            ),
            ...props,
        }
    } else {
        return { Left: () => null, ...props }
    }
}

const right = ({ visibility, setVisibility, ...props }) => {
    let { name } = props.field
    const { status } = props

    let Icon

    if (name.includes('password')) {
        Icon = visibility ? Visibility : VisibilityOff
        props.field.type = visibility ? 'text' : 'password'
    } else if (status === 'error') {
        Icon = ExclamationSolid
    } else if (status === 'valid') {
        Icon = CheckMd
    } else {
    }

    if (Icon) {
        return {
            Right: () => (
                <Svg
                    right="10px"
                    position="absolute"
                    onClick={() => setVisibility(!visibility)}
                >
                    <Icon fill="var(--color, var(--dark-muted))" />
                </Svg>
            ),
            ...props,
        }
    } else {
        return { Right: () => null, ...props }
    }
}

const Input = styled.input`
    width: 100%;
    height: 3em;
    border-radius: var(--border-radius);

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

const styles = props => [
    props.Left() &&
        css`
            input {
                padding-left: 2.4em;
            }
        `,
    props.Right &&
        css`
            input {
                padding-right: 2.4em;
            }
        `,
    props.status === 'error' &&
        css`
            --color: var(--danger);
            --border-width: 2px;
        `,
    props.status === 'valid' &&
        css`
            --color: var(--success);
            --border-width: 2px;
        `,
]

export default props => (
    <MapFormikProps {...props}>
        {({ error, ...props }) => {
            const [visibility, setVisibility] = useState(false)

            const { status } = props
            props = left(props)
            props = right({ visibility, setVisibility, ...props })

            const { Left, Right, field } = props
            return (
                <>
                    <Box
                        css={styles(props)}
                        position="relative"
                        display="flex"
                        alignItems="center"
                    >
                        <Left />
                        <Input {...field} />
                        <Right />
                    </Box>
                    {status === 'error' && <Box mt={1}>{error}</Box>}
                </>
            )
        }}
    </MapFormikProps>
)
