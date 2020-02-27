import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from 'common/models/loadModel'

// Local
import { loadPolicy } from './_loadPolicy'

export const about = {
    data: {},
    ...loadModel(),
    loadPolicy: thunk(loadPolicy),
}
