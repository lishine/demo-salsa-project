import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStore, useActions } from 'easy-peasy'
import get from 'lodash/fp/get'

import { Form, P, Box, Flex, Span, Button, H1, NavLink } from 'styles/ss-components'

import { Field } from 'formik'
import { Input } from 'common/form/fields/Input'
import { InputMessage } from 'common/form/fields/InputMessage'
import { Checkbox } from 'common/form/fields/Checkbox'
import { FForm } from 'common/form/FForm'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { Loading } from 'view/Loading'
import { boxCss } from 'styles/ss-utils'

const path = 'contactUs'

export const ContactUs = props => {
    const submitting = useStore(state => get(path)(state).submitting)
    const error = useStore(state => get(path)(state).error)

    const data = usePathStore(path, 'data')
    const loadContactUs = usePathActions(path, 'loadContactUs')
    const err = usePathStore(path, 'err')
    const loaded = usePathStore(path, 'loaded')
    useEffect(() => {
        loadContactUs()
    }, [])

    if (!loaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    const { title, text } = data

    return (
        <Flex mb="100px" className="grid-container padding-container">
            <Box w={[0, 1 / 12, 0, 2 / 12]} />
            <Box w={[12 / 12, 10 / 12, 8 / 12, 6 / 12]}>
                <H1 mt={11}>{title.toUpperCase()}</H1>
                <P py={4} mt={4} borderTop="1px solid var(--onwhite-border)">
                    {text}
                </P>
                <FForm path={path} initialValues={{ name: '', email: '' }}>
                    {({ handleSubmit }) => (
                        <Form
                            onSubmit={handleSubmit}
                            display="flex"
                            flexDirection="column"
                        >
                            <Field name="name">
                                {props => (
                                    <Input
                                        {...props}
                                        autoComplete="name"
                                        placeholder="Name"
                                        leftIcon="Name"
                                    />
                                )}
                            </Field>
                            <Field name="email">
                                {props => (
                                    <Input
                                        css={boxCss.css({ mt: '1' })}
                                        {...props}
                                        autoComplete="email"
                                        placeholder="Email"
                                        leftIcon="Email"
                                    />
                                )}
                            </Field>
                            <Field name="message">
                                {props => (
                                    <InputMessage
                                        css={boxCss.css({ mt: '1', h: 152 })}
                                        {...props}
                                        autoComplete="message"
                                        placeholder="Message"
                                        leftIcon="Message"
                                    />
                                )}
                            </Field>

                            <Button
                                w="229px"
                                mt={3}
                                type="submit"
                                className="btn btn-tertiary"
                                disabled={submitting}
                                loading={submitting}
                            >
                                SEND
                            </Button>
                            <Flex py={2}>{error}</Flex>
                        </Form>
                    )}
                </FForm>
            </Box>
        </Flex>
    )
}
