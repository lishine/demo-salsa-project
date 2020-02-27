import { when } from 'utils/utils'
import { post } from 'utils/fetch'
import * as selectors from 'view/login/logic/selectors'
import { thunk } from 'easy-peasy'

export const registerConfirm = thunk(async (__actions, __payload, { getStoreState }) => {
    const { token, link } = getStoreState().router.query
    return post({
        url: `${process.env.API_URL}/api/auth/${link}`,
        json: { token },
    })
        .then(async () => {
            console.log('1')
            // dispatch.login.setAlert({
            // alert: alerts.RegisterConfirm.emailConfirmed,
            // })
        })
        .catch(async err => {
            console.log('2')
            console.dir(err)
            const { data = {}, status } = err.response || {}
            const { mes } = data
            const errorMessage = when(status)
                .is(504, 'Timeout')
                .is(400, mes)
                .else('Something went wrong')
            // dispatch.login.setAlert({
            // alert: alerts.RegisterConfirm.errorConfirming,
            // extend: { errorMessage },
            // })
        })
})
