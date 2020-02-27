import React from 'react'
import styled from '@emotion/styled'
import dateFormat from 'dateformat'
import { useActions } from 'easy-peasy'

// Common
import { bg, mediaUp, mediaDown } from 'styles/utils'
import { Chevron } from 'common/svg/icons/Chevron'
import { Svg, Button, Box, Span, P, H1, H6, Flex } from 'styles/ss-components'
import { Col, Row } from 'styles/grid'
import { Header } from 'view/header/Header'
import { usePathStore, usePathActions } from 'common/hooks/hooks'

const bgs = {
    column: {
        backgroundImage: 'linear-gradient(var(--primary) 0%,var(--primary) 100%)',
        backgroundPosition: 'right top',
        backgroundSize: '8px 100%',
    },
    screen1: {
        backgroundImage:
            'linear-gradient(#000 0%, rgba(0, 0, 0, 0.5) 33%, rgba(0, 0, 0, 0) 100%)',
        backgroundPosition: 'center top',
        backgroundSize: '100% 168px',
    },
    screen2: {
        backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67%, #000 100%)',
        backgroundPosition: 'center bottom',
        backgroundSize: '100% 240px',
    },
    lens: {
        backgroundImage: "url('/static/svg/lens.svg')",
        backgroundPosition: 'calc(50% - 45px) calc(50% - 84px)',
        backgroundSize: '156px 155px',
    },
    images: {
        sm: {
            backgroundImage: "url('/static/img/hero/bg-sm.jpg')",
            backgroundPosition: 'left top',
            backgroundSize: 'auto auto',
        },
        md: {
            backgroundImage: "url('/static/img/hero/bg-md.jpg')",
            backgroundPosition: 'right top',
            backgroundSize: 'auto auto',
        },
        lg: {
            backgroundImage: "url('/static/img/hero/bg-lg.jpg')",
            backgroundPosition: 'center top',
            backgroundSize: 'auto auto',
        },
    },
}

const Background = styled(Box)`
    background-color: #000000;
    background-repeat: no-repeat;
    ${bg(bgs, {
        sm: ['screen1', 'screen2', 'images.sm'],
        md: ['screen1', 'screen2', 'images.md'],
        lg: ['column', 'screen1', 'images.lg'],
        xl: ['column', 'screen1', 'lens', 'images.lg'],
    })}
`

const Content = Box

export const Hero = ({ data }) => {
    const { price, discount } = usePathStore('common', 'data.program')
    const { promoDate } = usePathStore('common', 'data.general')
    const openModal = useActions(actions => actions.openModal)

    return (
        <Background
            pt="88px"
            pb={[5, 0]}
            minHeight={[672, 672, 672]}
            maxWidth={[null, null, 1920]}
            className="grid-container"
        >
            <Header hero />
            <Content color="light-normal" className="grid-container padding-container">
                <Row>
                    <Col cols={[12, 8]}>
                        <H6 mt={[4, 7, null, 6]}>{data.header1.toUpperCase()}</H6>
                        <H1
                            light
                            mt={[1, null, null, 2]}
                            className="hero-1"
                            maxWidth={[450, null, 600, 665]}
                        >
                            <Span color="primary">LEARN HOW TO</Span>
                            <Box color="white" as="strong" display="block">
                                sss DANCE TODAY
                            </Box>
                        </H1>
                        <P pt={[2, 3, 2]} maxWidth={[450, 555, 600, 665]}>
                            {data.text1}
                        </P>
                    </Col>
                </Row>
                <Box pt={[5, 2, 7]} maxWidth={[328, 472, null, 536]}>
                    <Flex>
                        <Button
                            flex={1}
                            className="btn btn-primary btn-large"
                            onClick={() => openModal({ component: 'SignUp' })}
                        >
                            BUY NOW
                        </Button>
                        <Button
                            flex={1}
                            ml={1}
                            className="btn btn-secondary btn-large"
                            onClick={() =>
                                window.scrollTo({
                                    left: 0,
                                    top: document.body.scrollHeight,
                                    behavior: 'smooth',
                                })
                            }
                        >
                            GET FREE LESSON
                            <Svg mt="-3px" notmobile>
                                <Chevron fill="var(--primary)" />
                            </Svg>
                        </Button>
                    </Flex>

                    <Box
                        pt={['10px', '2px', '10px']}
                        pb={['14px', '2px', '10px']}
                        width={[1, 1 / 2]}
                        textAlign="center"
                    >
                        <P>Special Price - {price}</P>
                        <P className="small">
                            {discount} off. The promo is until{' '}
                            {`${dateFormat(new Date(promoDate), 'dd mmmm yyyy')}`}
                        </P>
                    </Box>
                </Box>
            </Content>
        </Background>
    )
}
