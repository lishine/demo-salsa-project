// Common
import { throwError, throwIf } from 'utils/error'

// Local
import { deliever } from 'lib/email/utils/deliever'

export async function contactUs({ body, host }) {
    const { values } = body
    console.log('contactUs body', body)

    const { name, email, message } = values
    throwIf(!name || !email, 400, 'No name or email')()

    const info = await deliever({
        subject: 'Contact message',
        template: 'contactUs',
        templateParams: { name, email, message },
    }).catch(throwError(400, 'Email not sent'))

    return { info }
}
