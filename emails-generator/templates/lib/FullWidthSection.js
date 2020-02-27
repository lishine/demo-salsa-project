import React from 'react'

import style from './style'

export default props => (
    <mj-section
        padding-top={props.paddingTop || '0px'}
        padding-bottom={props.paddingBottom || '0px'}
        background-color={props.backgroundColor || style.colors.white}
    >
        <mj-column width="100%" vertical-align="top">
            {props.children}
        </mj-column>
    </mj-section>
)
