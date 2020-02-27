import isEmpty from 'lodash/isEmpty'

// Common
import { throwError, throwIf } from 'utils/error'
import { deliever } from 'lib/email/utils/deliever'

export async function sendRegister({ body, host }) {
    console.log('sendRegister body', body)
    let { name, id, email, order, price, fullCourseName } = body

    throwIf(!email || !name || !id, 400, 'Missing params')()

    const info = await deliever({
        email,
        name,
        subject: 'Register email',
        template: 'register',
        templateParams: { name, price, fullCourseName, receipt: order.after.receipt },
    }).catch(throwError(400, 'Email not sent'))

    return { info }
}
