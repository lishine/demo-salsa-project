import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const LoginPage = () => <div />

LoginPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
    console.log('in index in getInitialProps')

    store.dispatch.openModal({
        component: 'Login',
        params: { form: upperFirst(camelCase(query.form)) },
    })

    return {}
}

export default LoginPage
