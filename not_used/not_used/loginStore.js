// import { store } from 'react-easy-state'

// const self = store({
// 	values: { email: '', name: '' },

// 	reset() {
// 		Object.assign(self, {
// 			error: false,
// 			sendLink: false,
// 			alert: undefined,
// 			submitSource: undefined,
// 		})
// 	},

// 	onChange(values) {
// 		if (values !== self.values) {
// 			if (self.error) {
// 				self.setError(false)
// 			}
// 			if (self.sendLink) {
// 				self.setSendLink(false)
// 			}
// 			self.values = values
// 		}
// 	},
// 	setSubmitSource(submitSource) {
// 		self.submitSource = submitSource
// 	},
// 	setAlert(alert, extend) {
// 		self.alert = Object.assign({}, alert, extend)
// 	},
// 	setSendLink(bool) {
// 		self.sendLink = bool
// 	},
// 	setError(bool) {
// 		self.error = bool
// 	},
// 	setEmail(email) {
// 		self.email = email
// 	},
// })

// export const loginStore = self
