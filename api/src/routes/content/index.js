import { postRouter } from 'utils/microWrappers'
import { dbForward } from './dbForward'
import { datoForward } from './datoForward'

export default postRouter(
    {
        dbForward,
        datoForward,
    },
    __dirname
)
