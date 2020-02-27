import { postRouter } from 'utils/microWrappers'
import { transactionComplete } from './transactionComplete'

export default postRouter(
	{
		transactionComplete,
	},
	__dirname
)
