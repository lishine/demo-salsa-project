import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from 'common/models/loadModel'

// Local
import { loadAbout } from './loadAbout'

export const about = {
    data: {},
    ...loadModel(),
    loadAbout: thunk(loadAbout),
}
