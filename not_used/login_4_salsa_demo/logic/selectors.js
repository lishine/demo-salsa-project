import camelCase from 'lodash/fp/camelCase'
import upperFirst from 'lodash/fp/upperFirst'
import memo from 'memoize-state'

export const getFormPath = () => state => state.router.query.form
export const getLinkToken = () => state => state.router.query.token
export const getLinkType = () => state => state.router.query.link
export const getForm = () => memo(state => upperFirst(camelCase(state.router.query.form)))

// const getFormPath = state => () => state.router.query.form
// const getForm = state => () => upperFirst(camelCase(state.router.query.form))
// const getLinkToken = state => () => state.router.query.token
// const getLinkType = state => () => state.router.query.link

// export const selectors = memoize(state => {
// 	return {
// 		getFormPath(state),
// 		getForm,
// 		getLinkToken,
// 		getLinkType,
// 	}
// })

// import memoize from 'memoize-state'
// export const getForm = () => memoize(state => upperFirst(camelCase(state.router.query.form)))
// export const useForm = () => useStore(getForm())

// export const selectors = Object.entries({
// 	getFormPath: state => () => state.router.query.form,
// 	getForm: mem(state => () => {
// 		console.log('--------CALCULATING')
// 		return upperFirst(camelCase(state.router.query.form))
// 	}),
// 	getLinkToken: state => () => state.router.query.token,
// 	getLinkType: state => () => state.router.query.link,
// }).reduce((acc, [name, fn]) => Object.assign(acc, { [name]: fn }), {})

// export const useForm = () => useStore(selectors.getForm)
