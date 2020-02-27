import React from 'react'
import camelCase from 'lodash/camelCase'
import Document, { Head, Main, NextScript } from 'next/document'

import { store } from '../www/pages/_app'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        console.log('MY DOCUMENT')
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
