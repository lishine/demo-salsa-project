import { listen, action, thunk } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { formModel } from 'common/models/formModel'
import { post } from 'utils/fetch'
import { loadModel } from 'common/models/loadModel'

// Local
import { loadFaq } from './loadFaq'

export const faq = {
    data: {},
    ...loadModel(),
    loadFaq: thunk(loadFaq),
}
