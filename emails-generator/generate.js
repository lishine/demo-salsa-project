import dot from 'dot'
import fs from 'fs-extra'
import mjml2html from 'mjml'
import isEmpty from 'lodash/isEmpty'

const mjml_dir = 'templates/mjml'
const html_dir = 'html'
const out_dir = '../api/src/lib/email/templates'
// const local_image_domain = 'localhost'
// const deploy_image_domain = `${process.env.SITE_URL}`

const dotOptions = {
    interpolate: /\[\[=([\s\S]+?)\]\]/g,
    varname: 'it',
    strip: true,
    append: false,
    selfcontained: false,
}

let names = ['contactUs', 'freeLessons', 'newPassword', 'passwordChanged', 'register']
names.forEach(name => {
    const cwd = process.cwd()
    process.chdir(mjml_dir)
    const { html, errors } = mjml2html(fs.readFileSync(`${name}.mjml`, 'utf8'))
    if (!isEmpty(errors)) {
        console.log('errors', errors)
    }
    process.chdir(`${cwd}`)
    fs.writeFileSync(`${html_dir}/${name}.html`, html)
    // html.replace(local_image_domain, deploy_image_domain)
    const fn = dot.template(html, dotOptions)
    fs.writeFileSync(`${out_dir}/${name}.js`, `module.exports=${fn}`)
})
