import * as Yup from 'yup'

const MIN_PASSWORD_LENGTH = 6
const MIN_CODE_LENGTH = 4
const password = Yup.string()
    .min(
        MIN_PASSWORD_LENGTH,
        `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
    )
    .required('Password is required!')

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phone = Yup.string().matches(phoneRegExp, 'Phone number is not valid')

const schemas = values => {
    return {
        barcode: Yup.number()
            .typeError('Barcode must be a number')
            .integer('Barcode must be an integer number'),
        wifiName: Yup.string().required('WIFI Name is required!'),
        password,
        passwords: Yup.array().of(password),
        house: Yup.string(),
        street: Yup.string(),
        apartment: Yup.string().required('Apartment is required'),
        city: Yup.string(),
        doorCode: Yup.string(),
        code: Yup.string().required('Code is required'),
        // name: Yup.string().matches(/^.+?\s+?.+?$/, 'Full name is required'),
        name: Yup.string().required('Name is required'),
        gatePhone: phone,
        phone,
        email: Yup.string()
            .email('E-mail is not valid!')
            .required('E-mail is required!'),
        currentPassword: password,
        newPassword: password.notOneOf(
            [values.currentPassword],
            'Has to be new password'
        ),
        terms: Yup.bool().oneOf([true], 'Please agree to the terms'),
    }
}

export const pickSchema = fields => values => {
    if (Array.isArray(fields)) {
        return Yup.array().of(pickSchema(fields[0])(values))
    } else {
        const o = {}
        Object.entries(fields).forEach(([key, value]) => {
            if (typeof value === 'object') {
                o[key] = Object.assign(pickSchema(value)(values))
            } else {
                const s = schemas(values)[key]
                if (s) {
                    o[key] = s
                }
            }
        })
        return Yup.object().shape(o)
    }
}
