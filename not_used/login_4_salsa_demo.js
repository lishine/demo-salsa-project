import React from 'react'
import { useStore, useAction } from 'easy-peasy'

import Login from 'view/login/view/Login'
import { Link } from 'common/Link'

import * as selectors from 'view/login/logic/selectors'

// const LoginPage = () => {
// 	const reset = useAction(dispatch => dispatch.login.reset)

// 	if (process.browser) {
// 		console.log('# BROWSER login in render')
// 		reset()
// 	} else {
// 		console.log('# SERVER login in render')
// 	}

// 	return (
// 		<div>
// 			<Link route="home">home</Link>
// 			<div>{<Login />}</div>
// 		</div>
// 	)
// }

// LoginPage.getInitialProps = async ({ store }) => {
// 	const { dispatch, getState } = store
// 	// console.log('@@@@@@@@@@state', state)
// 	const { getLinkType } = selectors

// 	if (process.browser) {
// 		console.log('BROWSER login in getInitialProps')
// 	} else {
// 		console.log('SERVER login in getInitialProps')

// 		if (getLinkType()(getState()) === 'register-confirm') {
// 			console.log('REGISTER_CONFIRMATION')
// 			await dispatch.login.registerConfirm()
// 		}
// 	}

// 	return {}
// }

// export default LoginPage

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props)
		const { store } = props
		if (process.browser) {
			console.log('BROWSER in constructor in login')
			store.dispatch.login.reset()
		} else {
			console.log('SERVER in constructor in login')
		}
	}

	componentWillUnmount() {
		const { store } = this.props
		if (process.browser) {
			console.log('BROWSER in componentWillUnmount in login')
			console.log('cleaning login store')
			store.dispatch.login.clean()
		}
	}

	static async getInitialProps({ store }) {
		const { dispatch, getState } = store
		const { getLinkType } = selectors

		if (process.browser) {
			console.log('BROWSER login in getInitialProps')
		} else {
			console.log('SERVER login in getInitialProps')

			if (getLinkType()(getState()) === 'register-confirm') {
				console.log('REGISTER_CONFIRMATION')
				await dispatch.login.registerConfirm()
			}
		}

		return {}
	}

	render() {
		console.log('RENDER login')
		return (
			<div>
				<Link route="home">home</Link>
				<div>{<Login />}</div>
			</div>
		)
	}
}
