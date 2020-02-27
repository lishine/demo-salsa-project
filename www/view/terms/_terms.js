import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from 'common/models/loadModel'

// Local
import { loadTerms } from './_loadTerms'

export const terms = {
    data: {},
    ...loadModel(),
    loadTerms: thunk(loadTerms),
}
