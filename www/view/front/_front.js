import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from 'common/models/loadModel'

// Local
import { loadFront } from './_loadFront'

export const front = () => ({
    data: {},
    ...loadModel(),
    loadFront: thunk(loadFront),
})
