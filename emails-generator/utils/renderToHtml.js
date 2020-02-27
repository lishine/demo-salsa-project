import mjml from 'mjml'
import pretty from 'pretty'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export const renderToHtml = content => {
    const element = React.createElement(content)
    const rendered = ReactDOMServer.renderToStaticMarkup(element)
    const { html, errors } = mjml(rendered, { level: 'strict' })
    if (errors.length > 0) {
        console.warn(
            `MJML validation errors encountered in template ${rendered.errors
                .map(e => JSON.stringify(e))
                .join('\n')}`
        )
    }
    return pretty(html, { ocd: true })
}
