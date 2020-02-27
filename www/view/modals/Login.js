import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useStore, useActions } from 'easy-peasy'
import { FastField } from 'formik'
import isEmpty from 'lodash/isEmpty'

import { Form, Svg, Box, Flex, Image, P, Button, H2, NavLink } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'
import { Modal } from 'common/Modal'
import Input from 'common/form0/formik/Input'
import { RouteLink } from 'common/RouteLink'

import { FormikForm } from 'view/login/view/form/FormikForm'
import { Chevron } from 'common/svg/icons/index'
import { Logo } from 'common/svg/Logo'
import { usePathStore } from 'common/hooks/hooks'
import { boxCss } from 'styles/ss-utils'

const data = {
    SignIn: {
        title: 'WELCOME BACK',
        text: () => "Don't have an account?",
        links: {
            signUp: 'Sign up and buy the course',
            forgotPassword: 'Forgot password?',
        },
        fields: ['email', 'currentPassword'],
        button: 'LOGIN',
    },
    ChangePassword: {
        title: 'CHANGE PASSWORD',
        text: () => '',
        links: {},
        fields: ['currentPassword', 'newPassword'],
        button: 'CHANGE PASSWORD',
    },
    ForgotPassword: {
        title: 'PASSWORD RESET',
        text: () =>
            "Enter your email address , and we'll send you link to reset your password",
        links: {},
        fields: ['email'],
        button: 'RESET PASSWORD',
    },
    CheckYourInbox: {
        title: 'CHECK YOUR INBOX',
        text: (fromEmail, toEmail) =>
            `We have sent ${toEmail} an email with the reset link. If the email does not arrive soon, check your spam folder. It was sent from ${fromEmail}`,
        links: {
            return: 'Return to login',
        },
        fields: [],
    },
}

const FormFields = ({ form }) => {
    const { fields, links, button } = data[form]
    const error = useStore(state => state.login.error)
    const submitting = useStore(state => state.login.submitting)
    const openModal = useActions(actions => actions.openModal)
    const reset = useActions(actions => actions.login.reset)

    useEffect(() => {
        return () => reset()
    }, [])

    return (
        <FormikForm storePath="login" fields={fields}>
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    {fields.includes('email') && (
                        <FastField name="email">
                            {props => (
                                <Input
                                    {...props}
                                    css={boxCss.css({ pt: [4, 2], pb: 1 })}
                                    autoComplete="email"
                                    type="text"
                                    placeholder="Email"
                                />
                            )}
                        </FastField>
                    )}
                    {fields.includes('currentPassword') && (
                        <FastField name="currentPassword">
                            {props => (
                                <Input
                                    {...props}
                                    autoComplete="current-password"
                                    type="password"
                                    placeholder={
                                        form === 'ChangePassword'
                                            ? 'Current Password'
                                            : 'Password'
                                    }
                                />
                            )}
                        </FastField>
                    )}
                    {fields.includes('newPassword') && (
                        <FastField name="newPassword">
                            {props => (
                                <Input
                                    {...props}
                                    css={boxCss.css({ pt: 1 })}
                                    pt={1}
                                    autoComplete="new-password"
                                    type="password"
                                    placeholder="New Password"
                                />
                            )}
                        </FastField>
                    )}
                    <Flex pt={4} alignItems="center">
                        {links.forgotPassword && (
                            <NavLink
                                flex={1 / 2}
                                onClick={() =>
                                    openModal({
                                        component: 'Login',
                                        params: { form: 'ForgotPassword' },
                                    })
                                }
                            >
                                {links.forgotPassword}
                            </NavLink>
                        )}
                        {button && (
                            <Button
                                type="submit"
                                flex={1 / 2}
                                ml="auto"
                                className="btn btn-primary"
                                disabled={submitting}
                                loading={submitting}
                            >
                                {button}
                                <Chevron />
                            </Button>
                        )}
                    </Flex>
                    <Box mt={2} color="danger">
                        {error}
                    </Box>
                </Form>
            )}
        </FormikForm>
    )
}

const Content = ({ form, toEmail = 'to@email.test', fromEmail = 'from@email.test' }) => {
    const { fields, title, text, links } = data[form]
    const openModal = useActions(actions => actions.openModal)
    const { loginImage } = usePathStore('common', 'data.general')

    return (
        <Row className="no-gutters" height="100%">
            <Col
                cols={[0, 5, 5, 5]}
                display="flex"
                justifyContent="center"
                alignItems="center"
                alignSelf="center"
            >
                <Image src={loginImage.url} alt={loginImage.alt} />
            </Col>
            <Col
                pb={8}
                pt={[4, 6, 6]}
                cols={[12, 6, 6, 6]}
                className="padding-container-down-sm"
            >
                <Svg notmobile>
                    <Logo />
                </Svg>
                <H2
                    mt={[2, 4]}
                    mb={[3, 3]}
                    className="font-light"
                    textAlign={['left', 'left']}
                >
                    {title}
                </H2>
                <P>
                    {text(toEmail, fromEmail)}{' '}
                    {links.signUp && (
                        <NavLink
                            className="nowrap"
                            onClick={() =>
                                openModal({
                                    component: 'SignUp',
                                })
                            }
                        >
                            {links.signUp}
                        </NavLink>
                    )}
                </P>
                {!isEmpty(fields) && <FormFields form={form} />}
                {links.return && (
                    <RouteLink css={boxCss.css({ decorate: true })} route="home">
                        <Svg ml="-5px">
                            <Chevron transform="scale(-1,1)" />
                        </Svg>
                        {links.return}
                    </RouteLink>
                )}
            </Col>
            <Col cols={[0, 1, 1, 1]} />
        </Row>
    )
}

export const Login = ({ form }) => {
    const setForm = useActions(actions => actions.login.setForm)
    setForm(form)

    return (
        <Modal
            isOpen
            bg={['white', 'primary']}
            className="grid-container padding-container-down-sm margin-container-md"
            maxWidth={[null, null, 950]}
            height={['100%', 576]}
            alignSelf={['start', 'center']}
            overflow={['auto', 'visible']}
            Content={<Content form={form} />}
        />
    )
}
