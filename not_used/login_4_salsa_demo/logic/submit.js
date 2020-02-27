import { alerts } from 'view/login/view/form/data'
import * as c from './constants'
import { router } from 'routes'

import { when, sleep } from 'utils/utils'
import { post } from 'utils/fetch'
import * as selectors from './selectors'

export const submit = async (dispatch, payload, getState, injections, meta) => {
	const { values, actions } = payload
	const state = getState()
	const { getForm, getFormPath, getLinkToken } = selectors
	const { setSubmitting } = actions

	let apiValues = values
	const sendLink = state.login.submitSource === 'link'
	if (sendLink) {
		apiValues = Object.assign({}, apiValues, { sendRegLink: true })
	}

	apiValues = Object.assign({}, apiValues, { token: getLinkToken()(state) })
	console.log('apiValues', apiValues)

	await post({ apiPath: `/auth/${getFormPath()(state)}`, json: apiValues })
		.then(async data => {
			when(getForm()(state))
				.is(c.SIGN_UP, () => {
					const { info } = data
					console.log('info', info)
					if (info && info.preview) {
						const { html } = info.preview
						dispatch.login.setHtml(html)
						console.log('email preview')
					}

					dispatch.login.setAlert({ alert: alerts[c.SIGN_UP].confirmLinkSent })
				})
				.is(c.SIGN_IN, () => {
					if (sendLink) {
						dispatch.login.setAlert({
							alert: alerts['SendLink'].confirmLinkSent,
						})
					} else {
						dispatch.auth.setAuth(true)
						dispatch.login.setAlert({ alert: alerts[c.SIGN_IN].signedIn })
					}
				})
				.is(c.FORGOT_PASSWORD, () => {
					const { info } = data
					console.log('info', info)
					if (info && info.preview) {
						const { html } = info.preview
						dispatch.login.setHtml(html)
						console.log('email preview')
					}

					dispatch.login.setAlert({
						alert: alerts[c.FORGOT_PASSWORD].passwordLinkSent,
					})
				})
				.is(c.NEW_PASSWORD, () =>
					dispatch.login.setAlert({
						alert: alerts[c.NEW_PASSWORD].passwordUpdated,
					})
				)
				.else(() => {})()
		})
		.catch(err => {
			console.dir(err)
			const { data, status } = err.response || {}

			if (!data) {
				return
			}
			const { mes, code } = data

			const setError = () =>
				dispatch.login.setError(
					when(status)
						.is(504, 'Timeout')
						.is(400, mes)
						.else('Something went wrong')
				)

			when(getForm()(state))
				.is(c.SIGN_UP, () => {
					if (mes.includes('User already exists')) {
						dispatch.login.setError('User already exists')
					} else {
						setError()
					}
				})
				.is(c.SIGN_IN, () => {
					if (sendLink) {
						setError()
					} else if (code === 100) {
						dispatch.login.posSendLink()
					}
					setError()
				})
				.is(c.FORGOT_PASSWORD, () => setError())
				.is(c.NEW_PASSWORD, () => setError())
				.else(() => {})()
		})

	setSubmitting(false)
}
