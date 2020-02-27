import React from 'react'

// Common
import { router } from 'routes'

const Page = () => <div />

Page.getInitialProps = async ({ store }) => {
    const { token } = store.getState().router.query
    console.log('token', token)
    if (token) {
        store.dispatch.openModal({
            component: 'Login',
            params: { form: 'ChangePassword' },
        })
    }
}

export default Page
