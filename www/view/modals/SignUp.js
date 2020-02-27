import React, { useEffect } from 'react'
import { useStore, useActions } from 'easy-peasy'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { FastField } from 'formik'

import { Box, Flex, Image, P, H4, Form, Span, H2, Svg } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'

import { Modal } from 'common/Modal'
import { RouteLink } from 'common/RouteLink'
import { HLine } from 'view/HLine'
import Input from 'common/form0/formik/Input'

import { PayPalButton } from 'utils/paypal'
import { FormikForm } from 'view/login/view/form/FormikForm'
import { Checkbox } from 'common/form0/formik/Checkbox'
import { Logo } from 'common/svg/Logo'
import { usePathStore } from 'common/hooks/hooks'

const Header = props => (
    <H2 {...props}>
        SIGN UP AND BUY <Span display={['none', null, 'inline']}>THE COURSE</Span>
    </H2>
)

const stylesPaypal = isValidated =>
    isValidated
        ? {
              pointerEvents: 'auto',
              opacity: '1',
          }
        : {
              pointerEvents: 'none',
              opacity: '0.5',
          }

const PayPal = () => {
    const createOrder = useActions(actions => actions.login.createOrder)
    const paymentSuccess = useActions(actions => actions.login.paymentSuccess)
    const isValidated = useStore(state => state.login.isValidated)

    return (
        <Box css={stylesPaypal(isValidated)}>
            <PayPalButton
                onClick={() => console.log('paypal button clicked')}
                createOrder={(data, actions) => createOrder({ data, actions })}
                clientID={process.env.PAYPAL_CLIENT_ID}
                onSuccess={(details, data) => paymentSuccess({ details, data })}
            />
        </Box>
    )
}

const FormFields = () => {
    const setForm = useActions(actions => actions.login.setForm)
    const error = useStore(state => state.login.error)
    useEffect(() => {
        setForm('SignUp')
    }, [])

    return (
        <FormikForm storePath="login" fields={['name', 'email', 'newPassword', 'terms']}>
            {() => (
                <Form>
                    <Box pt={[1, 2]}>
                        <FastField name="name">
                            {props => (
                                <Input
                                    {...props}
                                    autoComplete="name"
                                    type="text"
                                    placeholder="First and Last Name *"
                                />
                            )}
                        </FastField>
                    </Box>
                    <Box pt={1}>
                        <FastField name="email">
                            {props => (
                                <Input
                                    {...props}
                                    autoComplete="email"
                                    type="text"
                                    placeholder="Your Email *"
                                />
                            )}
                        </FastField>
                    </Box>
                    <Box pt={1}>
                        <FastField name="newPassword">
                            {props => (
                                <Input
                                    {...props}
                                    autoComplete="new-password"
                                    type="password"
                                    placeholder="Create a password *"
                                />
                            )}
                        </FastField>
                    </Box>
                    <Box mt={[3, 3, 3]} pl="2px">
                        <FastField name="terms">
                            {props => (
                                <Checkbox {...props}>
                                    <Span color="onwhite-muted">
                                        Accept{' '}
                                        <RouteLink route="home">
                                            terms and conditions *
                                        </RouteLink>
                                    </Span>
                                </Checkbox>
                            )}
                        </FastField>
                    </Box>
                    <Box mt={2} color="danger">
                        {error}
                    </Box>
                </Form>
            )}
        </FormikForm>
    )
}

const Container = Box
const Padding = Box
const LeftCol = Flex
const RightCol = Col
const CourseName = P
const Explanation = P
const Info = P
const RegularPrice = Flex
const Discount = Flex
const Total = Flex
const Pay = Flex

const Content = () => {
    const { fullCourseName, discount, price, regularPrice } = usePathStore(
        'common',
        'data.program'
    )
    const { signupImage } = usePathStore('common', 'data.general')

    return (
        <Flex flexDirection={['column', 'row']} bg="white">
            <Header pt={6} display={['block', 'none']} textAlign="center" />
            <LeftCol
                pb={[6, 0]}
                pt={[2, 5, 5]}
                mt={[3, 0]}
                flexDirection={['column']}
                justifyContent="space-between"
                flex={0}
                bg="#2B2B2B"
                color="light-muted"
            >
                <Padding className="padding-container">
                    <Padding px={[null, null, 2]}>
                        <Svg notmobile>
                            <Logo />
                        </Svg>
                        <HLine notmobile mt={[5]} />
                        <H4 mt={[1, 3]} color="primary">
                            YOUR ORDER
                        </H4>
                        <CourseName mt={[3]}>{fullCourseName}</CourseName>
                        <RegularPrice
                            notmobile
                            pt={[3]}
                            as="p"
                            justifyContent="space-between"
                        >
                            <span>Regular price</span>
                            <span>{regularPrice}</span>
                        </RegularPrice>
                        <Discount notmobile as="p" justifyContent="space-between">
                            <span>Discount</span>
                            <span>{discount} off</span>
                        </Discount>
                        <Total pt={[3]} alignItems="baseline">
                            <P noBaselineShift>Total</P>
                            <P
                                flex={1}
                                mx="4px"
                                borderBottom="2px dotted currentColor"
                                noBaselineShift
                            />
                            <H4
                                className="font-light"
                                color="light-normal"
                                noBaselineShift
                            >
                                {price}
                            </H4>
                        </Total>
                    </Padding>
                </Padding>
                <Image
                    notmobile
                    mt={6}
                    mr={1}
                    src={signupImage.url}
                    alt={signupImage.alt}
                />
            </LeftCol>
            <RightCol pb={8} pt={[0, 6, 6]}>
                <Container
                    width={['100%', '100%', 6 / 8]}
                    ml={[null, null, null, 8]}
                    mx={[null, null, 'auto', null]}
                    className="padding-container-down-md"
                >
                    <Header display={['none', 'block']} />
                    <Padding mr={[null, null, null, 7]}>
                        <Explanation mt={[2, 3]}>
                            Create an account and then use your email and password to
                            access the course and your account
                        </Explanation>
                        <FormFields />
                        <Info pt={[3]} pb={[3]} className="small-flex">
                            In order to complete your transaction, we will transfer you
                            over to PayPal's secure servers.
                        </Info>
                        <Pay pt={[0, 5, 4]} justifyContent="center">
                            <Box flex={1} maxWidth={400}>
                                <PayPal />
                            </Box>
                        </Pay>
                    </Padding>
                </Container>
            </RightCol>
        </Flex>
    )
}

export const SignUp = () => (
    <Modal
        isOpen
        className="grid-container margin-container-md"
        width={[null, null, null, 963]}
        // height={[null, 648, 664, 648]}
        alignSelf={['start', 'center']}
        overflow={['auto', 'visible']}
        // transform={[null, 'translateY(-30px)', 'translateY(3px)', 'translateY(-80px)']}
        Content={<Content />}
    />
)
