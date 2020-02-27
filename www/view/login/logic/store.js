import { action, thunk, select } from 'easy-peasy'
import get from 'lodash/fp/get'
import isEmpty from 'lodash/isEmpty'
import dateFormat from 'dateformat'

import { sendRegister } from './sendRegister'
import { submit } from './submit'
import { registerConfirm } from './registerConfirm'
import { subscribe } from 'view/makeStore'
import { throwIf, totoCatch } from 'utils/utils'
import { FormikForm } from 'view/login/view/form/FormikForm'

const init = {
    error: undefined,
    sendLink: false,
    alert: undefined,
    submitSource: undefined,
    html: undefined,
    valid: false,
    form: undefined,
    validated: { notValidatedAtStart: true },
    submitted: false,
    order: { before: undefined, after: undefined },
    submitting: false,
}

const subscribeOnce = async (path, timeOut) => {
    const promise = new Promise(resolve => {
        const unsubscribe = subscribe(path, store => {
            const ret = get(path)(store.getState())
            resolve(ret)
            unsubscribe()
        })
    })
    return totoCatch(promise, timeOut)
}

export const login = {
    ...init,
    reset: action(state => {
        Object.assign(state, init)
    }),

    sendRegister: sendRegister,
    submit: submit,
    registerConfirm: registerConfirm,
    isValidated: select(state => isEmpty(state.validated)),
    setValidated: action((state, validated) => {
        state.validated = validated
    }),
    setSubmitted: action((state, submitted) => {
        state.submitted = submitted
    }),
    setOrder: action((state, order) => {
        console.log('assigning order', order)
        Object.assign(state.order, order)
        console.log('result state.order', state.order)
    }),
    createOrder: thunk(async (actions, payload, { getState, getStoreState }) => {
        let { price } = getStoreState().common.data.program
        if (price.charAt(0) === '$') {
            price = price.slice(1)
        }
        const order = await payload.actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: price,
                    },
                },
            ],
        })
        actions.setOrder({ before: order })

        actions.setSubmitted('')
        const submittedPromise = subscribeOnce('login.submitted', 25000)
        FormikForm.login.submitForm()
        await totoCatch(submittedPromise, 25000)
            .catch(err => console.log('error submitting form', err))
            .then(throwIf(result => result !== 'success', "didn't get success on submit"))
        return order
    }),
    paymentSuccess: thunk(async (actions, { details, data }, { dispatch }) => {
        console.log('details', details)
        console.log('data', data)
        const date = new Date()
        const dateSuffix =
            date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
        const receipt = `${dateFormat(date, 'yyyy-mm-dd')}-${dateSuffix}`
        console.log('receipt', receipt)

        actions.setOrder({
            after: {
                orderId: data.orderID,
                receipt,
            },
        })

        actions.setSubmitted('')
        const submittedPromise = subscribeOnce('login.submitted', 25000)
        FormikForm.login.submitForm()
        await totoCatch(submittedPromise, 25000).catch(err =>
            console.log('error submitting form', err)
        )

        dispatch.openModal({
            component: 'ThankYou',
        })
    }),
    clean: action(state => {
        // unsubsSetError()
    }),
    setAlert: action((state, { alert, extend }) => {
        state.alert = Object.assign({}, alert, extend)
    }),

    setHtml: action((state, html) => {
        state.html = html
    }),
    setSubmitSource: action((state, submitSource) => {
        state.submitSource = submitSource
    }),
    clearSubmitSource: action(state => {
        state.submitSource = undefined
    }),
    posSendLink: action((state, bool) => {
        state.sendLink = bool
    }),
    negSendLink: action((state, bool) => {
        state.sendLink = false
    }),
    setError: action((state, error) => {
        state.error = error
    }),
    clearError: action(state => {
        state.error = undefined
    }),
    setForm: action((state, form) => {
        state.form = form
    }),
    setSubmitting: action((state, submitting) => {
        state.submitting = submitting
    }),
}
