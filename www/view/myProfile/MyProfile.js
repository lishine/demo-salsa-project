import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStore, useActions } from 'easy-peasy'
import get from 'lodash/fp/get'

import { Form, P, Box, Flex, Span, Button, H1, NavLink } from 'styles/ss-components'

import { Field } from 'formik'
import { Input } from 'common/form/fields/Input'
import { Checkbox } from 'common/form/fields/Checkbox'
import { FForm } from 'common/form/FForm'
import { boxCss } from 'styles/ss-utils'

const path = 'myProfile'

export const MyProfile = () => {
    const { name, email, dontSendEmails } = useStore(state => state.auth.profile) || {}
    const submitting = useStore(state => get(path)(state).submitting)
    const error = useStore(state => get(path)(state).error)
    const openModal = useActions(actions => actions.openModal)
    const reset = useActions(actions => get(path)(actions).reset)

    useEffect(() => {
        return () => reset()
    }, [])

    return (
        <Flex mb="133px" className="grid-container padding-container">
            <Box w={[0, 0, 0, 2 / 12]} />
            <Box w={[12 / 12, 8 / 12, 7 / 12, 5 / 12]}>
                <H1 mt={11}>MY PROFILE</H1>
                <FForm
                    path={path}
                    initialValues={{ dontSendEmails: !!dontSendEmails, name, email }}
                    reset
                >
                    {({ handleSubmit }) => (
                        <Form
                            onSubmit={handleSubmit}
                            display="flex"
                            flexDirection="column"
                        >
                            <Field name="name">
                                {props => (
                                    <Input
                                        css={boxCss.css({ mt: 6 })}
                                        {...props}
                                        autoComplete="name"
                                        placeholder="Name"
                                        leftIcon="Name"
                                        label="Name *"
                                    />
                                )}
                            </Field>
                            <Field name="email">
                                {props => (
                                    <Input
                                        css={boxCss.css({ mt: 3 })}
                                        {...props}
                                        autoComplete="email"
                                        placeholder="Email"
                                        leftIcon="Email"
                                        label="Email *"
                                    />
                                )}
                            </Field>
                            <Field name="dontSendEmails">
                                {props => (
                                    <Checkbox
                                        {...props}
                                        css={boxCss.css({
                                            mt: 4,
                                            pl: '2px',
                                        })}
                                    >
                                        <Span color="onwhite-normal">
                                            Don't send me any emails
                                        </Span>
                                    </Checkbox>
                                )}
                            </Field>
                            <Button
                                w="116px"
                                mt={4}
                                type="submit"
                                className="btn btn-primary"
                                disabled={submitting}
                                loading={submitting}
                            >
                                UPDATE PROFILE
                            </Button>
                            <Flex py={2}>{error}</Flex>
                            <Box>
                                <NavLink
                                    mt={3}
                                    onClick={() =>
                                        openModal({
                                            component: 'Login',
                                            params: { form: 'ChangePassword' },
                                        })
                                    }
                                >
                                    Change Password
                                </NavLink>
                            </Box>
                        </Form>
                    )}
                </FForm>
            </Box>
        </Flex>
    )
}
