import { alerts } from 'view/login/view/form/data'
import { when } from 'utils/utils'
import { post } from 'utils/fetch'
import * as selectors from 'view/login/logic/selectors'

export const registerConfirm = (dispatch, payload, getState, injections, meta) => {
	const state = getState()
	const { getLinkType, getLinkToken } = selectors
	return post({
		apiPath: `/auth/${getLinkType()(state)}`,
		json: { token: getLinkToken()(state) },
	})
		.then(async () => {
			console.log('1')
			dispatch.login.setAlert({ alert: alerts.RegisterConfirm.emailConfirmed })
		})
		.catch(async err => {
			console.log('2')
			console.dir(err)
			const { data = {}, status } = err.response || {}
			const { mes } = data
			const errorMessage = when(status)
				.is(504, 'Timeout')
				.is(400, mes)
				.else('Something went wrong')
			dispatch.login.setAlert({
				alert: alerts.RegisterConfirm.errorConfirming,
				extend: { errorMessage },
			})
		})
}
