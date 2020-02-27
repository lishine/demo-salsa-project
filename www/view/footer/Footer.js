import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStore, useActions } from 'easy-peasy'
import get from 'lodash/fp/get'

import { Form, P, Box, Flex, Span, Image, H3, Button } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'
import { mediaUp, mediaDown } from 'styles/utils'
import { RouteLink } from 'common/RouteLink'

import { Field } from 'formik'
import { Input } from 'common/form/fields/Input'
import { Checkbox } from 'common/form/fields/Checkbox'
import { FForm } from 'common/form/FForm'
import { usePathStore } from 'common/hooks/hooks'
import { boxCss } from 'styles/ss-utils'

const Background = styled(Box)`
    background-color: var(--secondary);

    /* background-color: blue; */
    background-repeat: no-repeat;
    background-image: linear-gradient(var(--primary) 0%, var(--primary) 100%);

    background-position: center top;
    background-size: 100% 8px;
    ${mediaUp('md')} {
        background-position: left top;
        background-size: 3px 100%;
    }
    ${mediaUp('lg')} {
        background-position: left top;
        background-size: 8px 100%;
    }
`

const path = 'footer'

const FormFields = () => {
    const submitting = useStore(state => get(path)(state).submitting)
    const error = useStore(state => get(path)(state).error)

    return (
        <FForm path={path} initialValues={{ name: '', email: '', terms: false }}>
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Box width={[0, 7 / 8, 6 / 8, 6 / 8]}>
                        <Field name="name">
                            {props => (
                                <Input
                                    css={boxCss.css({ pt: 5 })}
                                    {...props}
                                    autoComplete="name"
                                    leftIcon="Name"
                                    placeholder="What is your name?"
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {props => (
                                <Input
                                    css={boxCss.css({ pt: 2 })}
                                    {...props}
                                    autoComplete="email"
                                    leftIcon="Email"
                                    placeholder="What is your email?"
                                />
                            )}
                        </Field>
                    </Box>

                    <Field name="terms">
                        {props => (
                            <Checkbox
                                {...props}
                                css={boxCss.css({
                                    mt: 2,
                                    pt: '5px',
                                    mb: '-5px',
                                    pl: '2px',
                                })}
                                place="footer"
                            >
                                <Span>
                                    Accept{' '}
                                    <RouteLink route="terms">
                                        terms and conditions *
                                    </RouteLink>
                                </Span>
                            </Checkbox>
                        )}
                    </Field>

                    <Box mt={2} width={[0, 5 / 8, 4 / 8, 3 / 8]}>
                        <Button
                            type="submit"
                            disabled={submitting}
                            loading={submitting}
                            className="btn-primary btn"
                        >
                            GET LESSONS
                        </Button>
                        <P pt={[2]} className="small">
                            By sending this request we will make sure that your
                            information is confidential and we will only use it to contact
                            you and give you information about our programs.
                        </P>
                        {error && <Flex py={2}>{error}</Flex>}
                    </Box>
                </Form>
            )}
        </FForm>
    )
}

const Content = Box

export const Footer = () => {
    const { facebookLink, twitterLink, youtubeLink } = usePathStore(
        'common',
        'data.general'
    )

    return (
        <Background
            height={[318, 536]}
            position="absolute"
            bottom={0}
            maxWidth={[null, null, 1920]}
            className="grid-container"
        >
            <Content
                pt={[6, 10, 9]}
                pb={[10]}
                color="light-normal"
                className="grid-container padding-container"
            >
                <Row>
                    <Col cols={[0, 0, 0, 1]} />
                    <Col cols={[0, 8, 8, 8]}>
                        <H3 light>
                            GET 2ND AND 3RD LESSON <Span color="primary">FOR FREE</Span>
                        </H3>
                        <FormFields />
                    </Col>
                    <Col cols={[12, 4, 4, 3]}>
                        <Box pt={[0, 2, 3]} textAlign={['center', 'left']}>
                            <P>Copyright</P>
                            <P>© Paradiso Academy 2019</P>
                            <P>
                                <RouteLink route="policy">Privacy Policy</RouteLink>
                            </P>
                            <P>
                                <RouteLink route="terms">Terms of Use</RouteLink>
                            </P>
                            <P pt={[1, 17]}>
                                <a href={facebookLink} target="_blank">
                                    <Image pr={1} src="/static/svg/social-facebook.svg" />
                                </a>
                                <a href={twitterLink} target="_blank">
                                    <Image p={1} src="/static/svg/social-twitter.svg" />
                                </a>
                                <a href={youtubeLink} target="_blank">
                                    <Image p={1} src="/static/svg/social-youtube.svg" />
                                </a>
                            </P>
                        </Box>
                    </Col>
                </Row>
            </Content>
        </Background>
    )
}
