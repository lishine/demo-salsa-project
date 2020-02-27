import React from 'react'

import style from './style'

export default ({ title }) => (
    <mj-section padding={`18px`}>
        <mj-column>
            <mj-text font-size={style.header.fontSize} color={style.colors.primary}>
                {title}
            </mj-text>
        </mj-column>
    </mj-section>
)
