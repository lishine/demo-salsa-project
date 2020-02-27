// Common
import { postRouter } from 'utils/microWrappers'

// Local
import { contactUs } from './contactUs'
import { freeLessons } from './freeLessons'

export default postRouter(
    {
        contactUs,
        freeLessons,
    },
    __dirname
)
