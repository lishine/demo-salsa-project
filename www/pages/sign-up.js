import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const SignUpPage = () => (
    <div
        css={css`
            height: 800px;
            background-color: blue;
        `}
    >
        page
    </div>
)

SignUpPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
    console.log('in sign-up in getInitialProps')

    store.dispatch.openModal({ component: 'SignUp' })

    if (process.browser) {
        console.log('Index BROWSER')
    } else {
        console.log('Index SERVER')
    }

    return {}
}

export default SignUpPage
