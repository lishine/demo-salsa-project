import * as yup from 'yup'
import { MIN_PASSWORD_LENGTH } from 'utils/constants'

export default values => ({
    name: yup.string().required('Name is required!'),
    email: yup
        .string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
    currentPassword: yup
        .string()
        .min(
            MIN_PASSWORD_LENGTH,
            `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
        )
        .required('Password is required!'),
    newPassword: yup
        .string()
        .min(
            MIN_PASSWORD_LENGTH,
            `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
        )
        .required('Password is required!')
        .notOneOf([values.currentPassword], 'Has to be new password!'),
    terms: yup.bool().oneOf([true], 'Please agree to the terms'),
})
