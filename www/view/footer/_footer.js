import { listen, action, thunk } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { formModel } from 'common/models/formModel'
import { post } from 'utils/fetch'

export const footer = {
    ...formModel(),

    post: thunk(async (___, json) =>
        post({
            url: `${process.env.API_URL}/api/forms/free-lessons`,
            json,
        })
    ),

    startSubmitting: thunk(async (actions, ___, { getState }) => {
        const { values } = getState()
        const json = { values }

        const { data, err, timeOut } = await actions.post(json)
        actions.stopSubmitting({ data, err, timeOut })
    }),

    submitSuccess: thunk(async actions => {
        console.log('footer submitSuccess')
        actions.setError({ error: 'Message has been sent' })
    }),
}
