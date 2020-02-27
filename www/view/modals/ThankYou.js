import React, { useEffect } from 'react'
import { useStore, useActions } from 'easy-peasy'

import { Box, Flex, Image, P, H4, H2, Svg, NavLink } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'

import { Modal } from 'common/Modal'
import { RouteLink } from 'common/RouteLink'
import { CheckXl } from 'common/svg/icons/CheckXl'
import { HLine } from 'view/HLine'
import { Logo } from 'common/svg/Logo'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { boxCss } from 'styles/ss-utils'

const Header = props => (
    <Flex {...props} justifyContent={['center', 'start']} alignItems="center">
        <P>
            <CheckXl checked width="68" />
        </P>
        <H2 ml={2}>THANK YOU</H2>
    </Flex>
)

const Content = () => {
    const { fullCourseName, price } = usePathStore('common', 'data.program')
    const { thankYouImage } = usePathStore('common', 'data.general')
    const error = usePathStore('login', 'error')
    const submitting = usePathStore('login', 'submitting')
    const sendRegister = usePathActions('login', 'sendRegister')
    const reset = useActions(actions => actions.login.reset)

    useEffect(() => {
        return () => reset()
    }, [])

    return (
        <Row
            flexDirection={['column', 'row']}
            className="no-gutters"
            bg="white"
            // height="100%"
        >
            <Header pt={6} onlymobile />
            <Col
                pb={[5, 0]}
                pt={[3, 5, 5]}
                mt={[3, 0]}
                cols={[null, 5, 4]}
                bg="#2B2B2B"
                color="light-muted"
            >
                <Box className="padding-container">
                    <Box px={[null, null, 2]}>
                        <Svg notmobile>
                            <Logo />
                        </Svg>
                        <HLine notmobile mt={[5]} />
                        <Flex pt={[0, 6]} justifyContent="space-between">
                            <H4 color="primary">RECEIPT</H4>
                            {/* <H4 className="font-light" color="light-normal">
                                2019-02-02-0001
                            </H4> */}
                        </Flex>
                        <P mt={[3]}>{fullCourseName}</P>
                        <Flex mt={[3]} pt="5px" alignItems="baseline">
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
                        </Flex>
                    </Box>
                </Box>
                <Box notmobile pt={[null, 23]}>
                    <Image src={thankYouImage.url} alt={thankYouImage.alt} />
                </Box>
            </Col>
            <Col pb={[8, 0]} pt={[1, 6, 6]} cols={[null, 7, 8]}>
                <Box
                    width={['100%', '100%', 6 / 8, 5 / 8]}
                    mx={[null, null, 'auto']}
                    className="padding-container-down-md"
                >
                    <Header notmobile />
                    <Box>
                        <P mt={[2, 8]}>
                            Your payment has been processed successfully.
                            {/* You can download
                            &ldquo;Absolute Beginner to Social Dancer&rdquo; 8 week course
                            right now. */}
                        </P>
                        <P>
                            <br />
                            {/* Or you can watch videos online by logging in by logging in */}
                            You can watch videos online by logging in by logging in with
                            your email and the password you've entered.
                        </P>
                        <P>
                            <br />
                            We sent a confirmation email. Please check your inbox and
                            click the confirmation link to ensure you will use the right
                            address to login.
                        </P>
                        <Box mt={[5, 20, 24]}>
                            <Flex mt={2} justifyContent="center">
                                <RouteLink
                                    route="my-course"
                                    css={boxCss.css({ fontWeight: 'bold' })}
                                >
                                    GO TO MY-COURSE
                                </RouteLink>
                            </Flex>
                            {/* <Button width={1} className="btn btn-primary">
                                DOWNLOAD NOW
                            </Button> */}
                            <Flex mt={2} justifyContent="center">
                                <NavLink
                                    loading={submitting}
                                    onClick={() => sendRegister()}
                                >
                                    Resend confirmation link
                                </NavLink>
                            </Flex>
                            <Flex mt={1} justifyContent="center">
                                {error}
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Col>
        </Row>
    )
}

export const ThankYou = () => (
    <Modal
        isOpen
        className="grid-container margin-container-md"
        width={[null, null, null, 963]}
        // height={[null, 648, 664, 648]}
        alignSelf={['start', 'center']}
        overflow={['scroll', 'visible']}
        // transform={[null, 'translateY(-30px)', 'translateY(3px)', 'translateY(-80px)']}
        Content={<Content />}
    />
)
