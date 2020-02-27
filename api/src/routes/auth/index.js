import { postRouter } from 'utils/microWrappers'
import { changePassword } from './changePassword'
import { forgotPassword } from './forgotPassword'
import { signUp } from './signUp'
import { signIn } from './signIn'
import { isAuth } from './isAuth'
import { profile } from './profile'
import { updateProfile } from './updateProfile'
import { sendRegister } from './sendRegister'
import { logout } from './logout'

export default postRouter(
    {
        logout,
        updateProfile,
        sendRegister,
        profile,
        changePassword,
        forgotPassword,
        signUp,
        signIn,
        isAuth,
    },
    __dirname
)
