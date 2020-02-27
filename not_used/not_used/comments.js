// console.log('isPublicPage(pathname)', isPublicPage(pathname))
// console.log('isPublic(pathname', isPublic(router.getRoute(pathname).page))
// console.log('router.getMatchingRoute(/)', router.getMatchingRoute('/'))
// console.log('pathname', pathname)
// console.log('getRoute(profile', router.getRoute('profile').page)
// console.log('getRoute(login)', router.getRoute('login').page)
// console.log('routes', router.routes)

// a: 111,
// set: (state, newState) => {
// 	Object.assign(state, newState)
// },
// incA: state => {
// 	state.a++
// },
// changeQuery: state => {
// 	state.query.a = state.query.a || 1
// 	state.query.a++
// },

// import reim from 'reim'
// const makeStore = (initialState, options) => {
// 	return reim(initialState || { auth: false, a: 1, b: 10 })
// }

// export const login = async () => {
// 	const response = await post({
// 		apiPath: '/auth/sign-in',
// 		json: {
// 			email: 'a22',
// 			password: '33',
// 			sendRegLink: 'true',
// 		},
// 	}).catch(error => {
// 		console.error('You have an error in your code or there are Network issues.', error)
// 		store.auth = false
// 		return false
// 	})
// 	console.log('response', response)
// 	store.auth = true
// 	Router.push('/profile')
// 	return true
// }

// export const fetchIsAuth = async ctx => {
// 	console.log('fetching isAuth')
// 	const response = await post({ ctx, apiPath: '/auth/is-auth', json: {} }).catch(error => {
// 		console.error('You have an error in your code or there are Network issues.', error)
// 		return false
// 	})
// 	console.log('response', response)
// 	return true
// }

// function getRawCookie(ctx = {}) {
// 	if (ctx.req && ctx.req.headers.cookie) {
// 		return ctx.req.headers.cookie
// 	}

// 	if (process.browser) {
// 		return document.cookie
// 	}

// 	return {}
// }

// const AA = () => {
// 	return (
// 		<button
// 			type="button"
// 			onClick={() => {
// 				store.dispatch.router.changeQuery()
// 				console.log('store.a', store.getState().router.query)
// 				console.log('getForm()', useForm())
// 			}}>
// 			click
// 		</button>
// 	)
// }

// import { globalStore } from 'pages/_app'

// globalStore.subscribe(
// 	state => {
// 		self.form = upperFirst(camelCase(state.query.form))
// 	},
// 	{
// 		getter: state => ({ form: state.query.form }),
// 	}
// )

// const [a] = useReim(globalStore, state => state.a)
