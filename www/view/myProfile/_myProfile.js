import { listen, action, thunk } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/fp/get'

// Common
import { formModel } from 'common/models/formModel'
import { post } from 'utils/fetch'
import { initialState } from 'view/model'

export const myProfile = () => ({
    reset: action(state => {
        console.log('RESETING MYPROFILE')
        Object.assign(state, get('myProfile')(initialState))
    }),
    ...formModel(),

    post: thunk(async (___, json) =>
        post({
            url: `${process.env.API_URL}/api/auth/update-profile`,
            json,
        })
    ),

    startSubmitting: thunk(async (actions, ___, { getState, getStoreState }) => {
        const { values } = getState()
        const json = { values }

        const { data, err, timeOut } = await actions.post(json)
        actions.stopSubmitting({ data, err, timeOut })
    }),

    submitSuccess: thunk(
        async (actions, { returnData: { code } }, { dispatch, getState }) => {
            actions.setError({ error: 'Success' })
        }
    ),
})
