import { listen, action, thunk } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { formModel } from 'common/models/formModel'
import { post } from 'utils/fetch'
import { loadModel } from 'common/models/loadModel'
import { loadContactUs } from './_loadContactUs'

export const contactUs = {
    ...formModel(),
    ...loadModel(),
    data: {},
    loadContactUs: thunk(loadContactUs),

    post: thunk(async (___, json) =>
        post({
            url: `${process.env.API_URL}/api/forms/contact-us`,
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
        console.log('contact us submitSuccess')
        actions.setError({ error: 'Message has been sent' })
    }),
}
