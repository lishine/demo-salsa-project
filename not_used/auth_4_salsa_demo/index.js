import { postRouter } from 'utils/microWrappers'
import { newPassword } from './newPassword'
import { forgotPassword } from './forgotPassword'
import { registerConfirm } from './registerConfirm'
import { signIn } from './signIn'
import { signUp } from './signUp'
import { isAuth } from './isAuth'
// import { logout } from './logout'

export default postRouter(
	{
		newPassword,
		forgotPassword,
		registerConfirm,
		signIn,
		signUp,
		isAuth,
		// logout,
	},
	__dirname
)
