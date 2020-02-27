import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const ThankYouPage = () => <div />

ThankYouPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
    console.log('in index in getInitialProps')

    store.dispatch.openModal({ component: 'ThankYou' })

    if (process.browser) {
        console.log('Index BROWSER')
    } else {
        console.log('Index SERVER')
    }

    return {}
}

export default ThankYouPage
