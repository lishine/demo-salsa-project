const fetch = require('isomorphic-unfetch')

async function isAuth(req) {
	const { headers } = req
	const { token } = headers
	return await fetch('http://localhost:8080/api/auth/is-auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: { token },
	})
}

export { isAuth }
