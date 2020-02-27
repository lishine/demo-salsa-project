import React, { useState } from 'react'
import { Formik, FastField } from 'formik'
import { useStore, useAction } from 'easy-peasy'

import { Container, Form, Title, Submit, FieldRow } from './styled'
import { Link } from 'common/Link'
import { Map } from 'utils/utils'
import * as selectors from 'view/login/logic/selectors'
import { validate } from 'common/form/validate'
import { formData } from './data'
import * as c from 'view/login/logic/constants'
import { when } from 'utils/utils'

const dispatch = fn => ({ if: condition => (condition ? fn() : {}) })

export default props => {
	const [values, setValues] = useState({})
	const { getForm } = selectors
	const form = useStore(getForm())
	const error = useStore(state => state.login.error)
	const sendLink = useStore(state => state.login.sendLink)

	const negSendLink = useAction(dispatch => dispatch.login.negSendLink)
	const clearError = useAction(dispatch => dispatch.login.clearError)
	const clearSubmitSource = useAction(
		dispatch => dispatch.login.clearSubmitSource
	)
	const setSubmitSource = useAction(
		dispatch => dispatch.login.setSubmitSource
	)
	const submit = useAction(dispatch => dispatch.login.submit)

	const { show, schema, title } = formData(form)
	return (
		<Container key={form}>
			<Title>{title}</Title>
			<Formik
				initialValues={values}
				validate={values => {
					setValues(values)
					dispatch(negSendLink).if(sendLink)
					dispatch(clearError).if(error)
					validate(schema)(values)
				}}
				onSubmit={(values, actions) => submit({ values, actions })}
				render={formikProps => {
					const {
						handleSubmit,
						submitForm,
						isSubmitting,
					} = formikProps

					return (
						<Form
							onSubmit={(...props) => {
								clearSubmitSource()
								handleSubmit(...props)
							}}
						>
							<Map collection={show}>
								{({ name, component }) => (
									<FieldRow key={name}>
										<FastField
											{...{
												width: '280px',
												name,
												component,
											}}
										/>
									</FieldRow>
								)}
							</Map>

							{form === c.SIGN_IN && (
								<Link
									shallow
									route="login"
									form="forgot-password"
								>
									forgot password
								</Link>
							)}
							{!!error && (
								<div style={{ color: 'black' }}>{error}</div>
							)}
							{sendLink && (
								<a
									href="#"
									onClick={() => {
										setSubmitSource('link')
										submitForm()
									}}
								>
									Resend link
								</a>
							)}

							<Submit state={isSubmitting ? 'loading' : ''} />
						</Form>
					)
				}}
			/>
		</Container>
	)
}
