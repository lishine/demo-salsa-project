import { when } from 'utils/utils'
import { post } from 'utils/fetch'
import kebabCase from 'lodash/kebabCase'
import { thunk } from 'easy-peasy'

// Common
import { router } from 'routes'

export const submit = thunk(
    async (actions, payload, { getState, getStoreState, dispatch }) => {
        if (getState().submitting) {
            return
        }
        actions.setSubmitting(true)

        const token = getStoreState().router.query.token
        const { price, fullCourseName } = getStoreState().common.data.program
        const { order, form } = getState()
        const formPath = kebabCase(form)
        const { values } = payload

        const json = { ...values, token, order, price, fullCourseName }
        console.log('sending json', json)

        const { err, timeOut, data } = await post({
            url: `${process.env.API_URL}/api/auth/${formPath}`,
            json,
        })
        if (data) {
            actions.setSubmitted('success')

            await when(form)
                .is('SignUp', async () => {
                    console.log('data', data)
                    if (order.after) {
                        await dispatch.auth.enter()
                        console.log('SIGNED IN')
                    }
                })
                .is('SignIn', () => {
                    console.log('data', data)
                    console.log('SIGNED IN')
                    dispatch.auth.enter()
                    dispatch.closeModal()
                })
                .is('ForgotPassword', () => actions.setError('Success'))
                .is('ChangePassword', async () => {
                    actions.setError('Success')
                    await dispatch.auth.enter()
                    router.replaceRoute('home')
                    dispatch.closeModal()
                    console.log('SIGNED IN')
                })
                .else(() => {})()
        } else {
            actions.setSubmitted('failure')
            const { data, status } = err.response || {}

            if (!data) {
                actions.setError('Something went wrong')
            } else {
                const { mes = '', code } = data

                const setError = () =>
                    actions.setError(
                        when(status)
                            .is(504, 'Timeout')
                            .is(400, mes)
                            .else('Something went wrong')
                    )

                when(form)
                    .is('SignUp', () => {
                        setError()
                    })
                    .is('SignIn', () => {
                        setError()
                    })
                    .is('ForgotPassword', () => setError())
                    .is('ChangePassword', () => setError())
                    .else(() => {})()
            }
        }

        actions.setSubmitting(false)
    }
)
