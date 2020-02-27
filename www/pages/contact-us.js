import React from 'react'

// Local
import { ContactUs } from 'view/ContactUs/ContactUs'

const Page = () => <ContactUs />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        await store.dispatch.contactUs.loadContactUs()
    }
    return { store }
}

export default Page
