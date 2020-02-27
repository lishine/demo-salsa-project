import React from 'react'

const Profile = props => {
	// const { ok } = props.data
	const ok = true

	return (
		<div>
			<h1>is-login: {ok ? 'yes' : 'no'}</h1>

			<style jsx>{`
				img {
					max-width: 200px;
					border-radius: 0.5rem;
				}
				h1 {
					margin-bottom: 0;
				}
				.lead {
					margin-top: 0;
					font-size: 1.5rem;
					font-weight: 300;
					color: #666;
				}
				p {
					color: #6a737d;
				}
			`}</style>
		</div>
	)
}

// Profile.getInitialProps = async (ctx, auth) => {
// 	if (process.browser) {
// 		console.log('in profile getInitialProps')
// 		console.log('Router.pathname', Router.pathname)
// 		// if (Router.pathname === '/login') {
// 		// 	Router.push('/profile')
// 		// }
// 	}
// 	return {}
// }

export default Profile
