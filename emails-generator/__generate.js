import * as templates from './templates/templatesIndex'
import { renderToHtml } from './utils/renderToHtml'
import dot from 'dot'
import fs from 'fs-extra'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import pretty from 'pretty'
import camelCase from 'lodash/camelCase'
import { Links } from './index.js'

const html_dir = 'html'
const out_dir = '../api/src/lib/email/templates'

const dotOptions = {
    interpolate: /\[\[=([\s\S]+?)\]\]/g,
    varname: 'it',
    strip: true,
    append: false,
    selfcontained: false,
}

let names = []
Object.entries(templates).forEach(([name, component]) => {
    name = camelCase(name)
    names.push(name)
    // Converting React + JST + MJML ==> html + jst
    const html = renderToHtml(component)
    // Runtime Fn(it object) returnig html
    const fn = dot.template(html, dotOptions)
    fs.writeFileSync(`${out_dir}/${name}.js`, `module.exports=${fn}`)
    // Preview html + JST
    fs.writeFileSync(`${html_dir}/${name}.html`, html)
})
console.log('names', names)

// Links preview index
const previewIndexHtml = ReactDOMServer.renderToStaticMarkup(<Links {...{ names }} />)
let document = fs.readFileSync(`${__dirname}/index.jst`, 'utf8')
let rend = dot.template(document)
fs.writeFileSync(`${html_dir}/index.html`, pretty(rend({ reactapp: previewIndexHtml })))
