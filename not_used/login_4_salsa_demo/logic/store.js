import { effect } from 'easy-peasy'

import { submit } from './submit'
import { registerConfirm } from './registerConfirm'
import { subscribe } from 'view/store'

const init = {
	error: undefined,
	sendLink: false,
	alert: undefined,
	submitSource: undefined,
	values: {},
	html: undefined,
}

let unsubsSetError

const dispatch = fn => ({ if: condition => (condition ? fn() : {}) })

export const login = {
	...init,
	submit: effect(submit),
	registerConfirm: effect(registerConfirm),
	reset(state) {
		unsubsSetError = subscribe('router', store =>
			dispatch(store.dispatch.login.clearError).if(store.getState().login.error)
		)
		Object.assign(state, init)
	},
	clean(state) {
		unsubsSetError()
	},
	setAlert(state, { alert, extend }) {
		state.alert = Object.assign({}, alert, extend)
	},

	setHtml(state, html) {
		state.html = html
	},
	setSubmitSource(state, submitSource) {
		state.submitSource = submitSource
	},
	clearSubmitSource(state) {
		state.submitSource = undefined
	},
	posSendLink(state, bool) {
		state.sendLink = bool
	},
	negSendLink(state, bool) {
		state.sendLink = false
	},
	setError(state, error) {
		state.error = error
	},
	clearError(state) {
		state.error = undefined
	},
}
