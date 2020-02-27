import React from 'react'
import { MapFormikProps } from '../utils/MapFormikProps'
import { P, Span, Box } from 'styles/ss-components'

import _Checkbox from 'rc-checkbox'
import 'common/checkbox.css'

const StyledCheckbox = ({ children, place, ...props }) => (
    <div>
        <_Checkbox
            {...props}
            id={`${place}_${props.name}`}
            checked={props.value || false}
        />
        &nbsp;&nbsp;&nbsp;
        <Span as="label" htmlFor={`${place}_${props.name}`}>
            {children}
        </Span>
    </div>
)

export const Checkbox = ({ children, ...props }) => (
    <MapFormikProps {...props}>
        {({ status, error, field }) => (
            <>
                <StyledCheckbox {...field}>{children}</StyledCheckbox>
                {status === 'error' && <Box pb={2}>{error}</Box>}
            </>
        )}
    </MapFormikProps>
)
