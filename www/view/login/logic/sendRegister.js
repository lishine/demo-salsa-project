import { when } from 'utils/utils'
import { post } from 'utils/fetch'
import kebabCase from 'lodash/kebabCase'
import { thunk } from 'easy-peasy'

export const sendRegister = thunk(
    async (actions, payload, { getState, getStoreState, dispatch }) => {
        if (getState().submitting) {
            return
        }
        actions.setSubmitting(true)

        const { order } = getState()
        const { price, fullCourseName } = getStoreState().common.data.program
        const { name, email, id } = getStoreState().auth.profile
        const json = { order, name, email, id, price, fullCourseName }

        const { err, timeOut, data } = await post({
            url: `${process.env.API_URL}/api/auth/send-register`,
            json,
        })
        if (data) {
            actions.setError('Success')
        } else {
            const { data, status } = err.response || {}

            if (!data) {
                actions.setError('Something went wrong')
            } else {
                const { mes = '' } = data

                actions.setError(
                    when(status)
                        .is(504, 'Timeout')
                        .is(400, mes)
                        .else('Something went wrong')
                )
            }
        }

        actions.setSubmitting(false)
    }
)
