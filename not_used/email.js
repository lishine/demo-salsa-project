import * as templates from 'lib/email/templates/index'
import { createEmailToken } from '../api/src/routes/auth/common/token'
import { deliever } from '../api/src/lib/email/utils/deliever'

const url = process.env.SITE_URL

// const calldeliever = props => {
//     const isEmailPreview =
//         process.env.EMAIL_PREVIEW &&
//         RegExp(process.env.EMAIL_PREVIEW_PATTERN).test(props.email)
//     if (!isEmailPreview) {
//         return deliever(props)
//     } else {
//         return { preview: props }
//     }
// }

export async function emailRegister({ name, email }) {
    const subject = 'Register confirm email'
    const html = templates.register({ name })

    return deliever({ subject, name, email, html })
}
