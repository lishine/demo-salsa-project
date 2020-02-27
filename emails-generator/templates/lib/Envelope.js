import React from 'react'

import style from './style'

import Header from './Header'
import Contact from './Contact'
import Social from './Social'

export default props => (
    <mjml>
        <mj-body background-color={style.colors.tertiary} width="500px">
            <Header title={props.title} />
            {props.children}
            {/* <Contact /> */}
            {/* <Social /> */}
        </mj-body>
    </mjml>
)
