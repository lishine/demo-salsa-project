import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Front } from 'view/front/Front'

const Page = () => <Front />

Page.getInitialProps = async ({ store }) => {
    console.log('*************** process.browser', process.browser)
    if (!process.browser) {
        await store.dispatch.front.loadFront()
    }
}

export default Page
