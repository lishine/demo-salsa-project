import PropTypes from 'prop-types'
import React from 'react'

import style from './style'

export default props => (
    <mj-text
        padding-top={props.paddingTop || `${style.distance}px`}
        padding-bottom={`${style.distance}px`}
        color={props.color || style.colors.black}
        line-height="21px"
        align={props.align || 'left'}
    >
        {props.children}
    </mj-text>
)
