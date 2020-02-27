// import kebabCase from 'lodash/fp/kebabCase'
// import memo from 'memoize-state'

export const getLinkToken = state => state.router.query.token
export const getLinkType = state => state.router.query.link
// export const getFormPath = state => kebabCase(getForm(state))
// export const getForm = () =>
// memo(state => upperFirst(camelCase(state.router.query.form)))
