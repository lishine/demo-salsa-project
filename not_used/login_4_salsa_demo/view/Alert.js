import React from 'react'
import { useStore, useAction } from 'easy-peasy'

import { Container } from './form/styled'
import { ButtonRow } from './styled'
import { Link } from 'common/Link'

export default () => {
	const alert = useStore(state => state.login.alert)
	const html = useStore(state => state.login.html)
	const { btnContinueToSite, message, btnSignIn, errorMessage } = alert | {}

	return (
		<Container>
			<div style={{ color: 'black', paddingTop: '20px', textAlign: 'center' }}>
				{message}
			</div>
			{errorMessage && (
				<div style={{ color: 'black', paddingTop: '20px', textAlign: 'center' }}>
					{errorMessage}
				</div>
			)}
			{btnContinueToSite && (
				<ButtonRow>
					<Link replace route="home">
						HOME
					</Link>
				</ButtonRow>
			)}
			{btnSignIn && (
				<Link replace route="login" form="sign-in">
					sign-in
				</Link>
			)}
			{html && (
				<a
					href="#"
					onClick={e => {
						const win = window.open('', '_blank')
						win.document.write(html)
						win.document.close()
					}}>
					Email preview
				</a>
			)}
		</Container>
	)
}
