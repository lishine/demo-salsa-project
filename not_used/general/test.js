import { isAuth } from 'routes/auth/isAuth'
import fetch from 'isomorphic-unfetch'

const url = process.env.API_URL

export async function test({ body, host }) {
	console.log('body', body)
	console.log('host', host)
	const res = await fetch(`${url}/api/auth/sign-in`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({}),
	})
	console.log('res.headers', res.headers)
	return { isAuth: 'ok' }
}

// import { post } from 'utils/utils'

// return post(`https://${host}/api/email/send`, {
// 	template: 'confirm',
// 	data: {
// 		name: 'testPavel Ravits',
// 		email: 'salsasoaf@gmail.com',
// 		link: 'http://google.com',
// 	},
// })

// export async function test({ body, ...props }) {
// 	return send({
// 		...props,
// 		body: {
// 			template: 'confirm',
// 			data: {
// 				name: 'testPavel Ravits',
// 				email: 'salsasoaf@gmail.com',
// 				link: 'http://google.com',
// 			},
// 		},
// 	})
// }
