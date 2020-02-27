import React from 'react'

// Local
import { Terms } from 'view/terms/Terms'

const Page = () => <Terms />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        await store.dispatch.terms.loadTerms()
    }
}

export default Page
