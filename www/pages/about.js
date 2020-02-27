import React from 'react'

// Local
import { About } from 'view/about/About'

const Page = () => <About />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        await store.dispatch.about.loadAbout()
    }
}

export default Page
