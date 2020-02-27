import registerConfirm from 'lib/email/templates/registerConfirm'
import newPassword from 'lib/email/templates/newPassword'
import { deliever } from 'lib/email/utils/deliever'
import { createEmailToken } from './token'

const url = process.env.SITE_URL

const callDeleiver = ({ subject, name, email, html, link }) => {
	const isEmailPreview =
		process.env.EMAIL_PREVIEW && RegExp(process.env.EMAIL_PREVIEW_PATTERN).test(email)
	if (!isEmailPreview) {
		return deliever({ subject, name, email, html })
	} else {
		return { preview: { link, html, email, subject, name } }
	}
}

export async function emailRegisterConfirmLink({ userId, name, email }) {
	const token = createEmailToken({ userId, register: true })

	const link = `${url}/login?link=register-confirm&token=${token}`
	const subject = 'Register confirm email'
	const html = registerConfirm({ name, email, link })

	console.log('register link', link)
	return callDeleiver({ subject, name, email, html, link })
}

export async function emailNewPasswordLink({ userId, name, email }) {
	const token = createEmailToken({ userId, newPassword: true })

	const link = `${url}/login/new-password?token=${token}`
	const subject = 'New password link'
	const html = newPassword({ name, email, link })

	console.log('new password link', link)
	return callDeleiver({ subject, name, email, html, link })
}
