import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from 'common/models/loadModel'

// Local
import { loadCourse } from './_loadCourse'

export const course = {
    data: {},
    ...loadModel(),
    loadCourse: thunk(loadCourse),
}
