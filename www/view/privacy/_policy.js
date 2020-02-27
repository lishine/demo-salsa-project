import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from './node_modules/common/models/loadModel'

// Local
import { loadPolicy } from './_loadPrivacy'

export const about = {
    data: {},
    ...loadModel(),
    loadPolicy: thunk(loadPolicy),
}
