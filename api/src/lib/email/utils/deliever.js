import FormData from 'form-data'
import fetch from 'isomorphic-unfetch'
import opn from 'opn'
import fse from 'fs-extra'

// Common
import { queryDato } from 'utils/utils'
import * as templates from 'lib/email/templates/index'

const getEmail = async props =>
    queryDato(
        /* GraphQL */ `
            query queryCommon {
                general {
                    fromEmail
                    contactEmail
                    fromEmailName
                    facebookLink
                    youtubeLink
                    instagramLink
                }
            }
        `,
        props
    )

export async function deliever({ subject, email, template, templateParams, name, host }) {
    // const from = `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`
    const {
        general: {
            fromEmail,
            fromEmailName,
            contactEmail,
            facebookLink,
            youtubeLink,
            instagramLink,
        },
    } = await getEmail()

    const from = `${fromEmailName} <${fromEmail}>`
    const to = email ? `${name} <${email}>` : `${fromEmailName} <${contactEmail}>`
    console.log(`sending email subject ${subject} from ${from} to ${to}`)

    const html = templates[template]({
        ...templateParams,
        facebookLink,
        youtubeLink,
        instagramLink,
        domain: process.env.SITE_URL,
    })
    if (process.env.EMAIL_SEND) {
        const form = new FormData()
        form.append('from', from)
        form.append('to', to)
        form.append('subject', subject)
        form.append('html', html)
        const delievered = await fetch(process.env.EMAIL_URL, {
            method: 'POST',
            headers: {
                Authorization:
                    'Basic ' + Buffer.from(process.env.EMAIL_API_KEY).toString('base64'),
                'Content-Type': form.getHeaders()['content-type'],
            },
            body: form,
        }).then(response => response.json())
        return { delievered }
    } else if (process.env.EMAIL_PREVIEW && host.includes('localhost')) {
        const file = `${__dirname}/../../../../dist/html/temp.html`
        fse.outputFileSync(file, html)
        opn(file)
        return {}
    } else {
        return {}
    }
}

