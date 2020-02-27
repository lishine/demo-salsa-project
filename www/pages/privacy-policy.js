import React from 'react'

// Local
import { Policy } from 'view/policy/Policy'

const Page = () => <Policy />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        await store.dispatch.policy.loadPolicy()
    }
}

export default Page
