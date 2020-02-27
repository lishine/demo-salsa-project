import React from 'react'

// Local
import { Faq } from 'view/faq/Faq'

const Page = () => <Faq />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        await store.dispatch.faq.loadFaq()
    }
}

export default Page
