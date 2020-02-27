// const Email = require('email-templates')
// const nodemailer = require('nodemailer')
// const { createToken } = require("../auth/utils/token")

async function sendRegistrationEmail({ host, userId, name, email }) {
	// console.log('sendRegistrationEmail', '{ host, userId, name, email }', { host, userId, name, email })
	// const token = createToken({ userId, isRegister: true })
	// const link = `http://${host}/login?link=register-confirm&token=${token}`
	// console.log('token host link', token, host, link)
	// return createEmailTransport().send({
	// 	template: 'register-confirmation',
	// 	message: {
	// 		to: process.env.NODE_ENV === 'production' ? email : 'vim55k@gmail.com',
	// 	},
	// 	locals: {
	// 		name,
	// 		link,
	// 	},
	// })
}

async function sendNewPasswordEmail({ host, userId, name, email }) {
	// const token = createToken({ userId, isNewPassword: true })
	// const link = `http://${host}/login?link=new-password&token=${token}`
	// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
	// return createEmailTransport().send({
	// 	template: 'new-password',
	// 	message: {
	// 		to: process.env.NODE_ENV === 'production' ? email : 'vim55k@gmail.com',
	// 	},
	// 	locals: {
	// 		name,
	// 		link,
	// 	},
	// })
}

export { sendNewPasswordEmail, sendRegistrationEmail }

// const createTransport = () =>
// 	nodemailer.createTransport({
// 		service: 'gmail',
// 		auth: {
// 			user: 'barbrazilcode@gmail.com',
// 			pass: 'micH1234',
// 		},
// 	})

// const createEmailTransport = () =>
// 	new Email({
// 		message: {
// 			from: 'barbrazilcode@gmail.com',
// 		},
// 		send: process.env.NODE_ENV === 'production',
// 		preview: process.env.NODE_ENV === 'development',
// 		transport: createTransport(),
// 	})
