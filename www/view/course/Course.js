// Node - Modules
import React, { useEffect } from 'react'
import styled from '@emotion/styled'
// import dynamic from 'next/dynamic'

// Common
import { P, Box, Flex, H1, H4, Span, H3 } from 'styles/ss-components'

// Local
import { Icons } from './Icons'
import { Buy } from './buy/Buy'
import { Skills } from './Skills'
import { Tasks } from './Tasks/Tasks'
import { Instructors } from './Instructors'
import { mediaUp } from 'styles/utils'
import { Quote } from './Quote'
import { ContentTemplate } from './ContentTemplate'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { Loading } from 'view/Loading'

const Head = styled(Box)`
    background-repeat: no-repeat;
    background-image: url(/static/svg/lens.svg), url(/static/img/course/header.png);
    background-position: calc(100% - 50px) 118px, left top;
    background-size: auto auto, auto 490px;
    ${mediaUp('md')} {
        background-repeat: no-repeat;
        background-image: url(/static/svg/lens.svg), url(/static/img/course/header.png);
        background-position: calc(100% - 146px) 118px, left top;
        background-size: auto auto, auto auto;
    }
    ${mediaUp('xl')} {
        background-repeat: no-repeat;
        background-image: url(/static/svg/lens.svg), url(/static/img/course/header.png);
        background-position: calc(50% + 40px) 118px, center top;
        background-size: auto auto, auto auto;
    }
`
const Foot = styled(Box)`
    background-repeat: no-repeat;
    background-image: linear-gradient(#f2f2f2 0%, #f2f2f2 100%);
    background-position: bottom center;
    background-size: auto 364px;
    ${mediaUp('md')} {
        background-repeat: no-repeat;
        background-image: linear-gradient(#f2f2f2 0%, #f2f2f2 100%);
        background-position: bottom center;
        background-size: auto 264px;
    }
    ${mediaUp('xl')} {
        background-repeat: no-repeat;
        background-image: linear-gradient(#f2f2f2 0%, #f2f2f2 100%);
        background-position: bottom center;
        background-size: auto 264px;
    }
`

const path = 'course'

// const DynamicComponent3WithNoSSR = dynamic({
//     loader: () => import('react-paypal-button').then(d => d.PayPalButton),
//     loading: () => <p>Loading ...</p>,
//     ssr: false,
// })
export const Course = () => {
    const data = usePathStore(path, 'data')
    const loadCourse = usePathActions(path, 'loadCourse')
    const err = usePathStore(path, 'err')
    const loaded = usePathStore(path, 'loaded')
    useEffect(() => {
        loadCourse()
    }, [])
    if (!loaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }
    const { title, firstParagraph } = data
    return (
        <Foot className="grid-container" maxWidth={[null, null, 1920]}>
            <Head height={490} pt="88px" maxWidth={[null, null, 1920]}>
                <Box className="grid-container">
                    <ContentTemplate pt={4} className="padding-container-down-md">
                        {/*    <DynamicComponent3WithNoSSR
                            amount="0.01"
                            currency="USD"
                            onPaymentStart={() => console.log('payment started')}
                            // createOrder={(data, actions) => createOrder({ data, actions })}
                            env="production"
                            productionID={process.env.PAYPAL_CLIENT_ID}
                            // onSuccess={(details, data) => paymentSuccess({ details, data })}
                        /> */}

                        <H4 light className="course">
                            {title.toUpperCase()}
                        </H4>
                        <H1 mt={2} light>
                            <strong>LEARN xxx </strong>
                            <Span color="primary">
                                IN 8 HOURS{' '}
                                <Span color="primary" display={['none', 'inline']}>
                                    AND DANCE
                                </Span>
                            </Span>
                        </H1>
                        <Icons mt={1} light />
                    </ContentTemplate>
                </Box>
            </Head>
            <Flex position="relative">
                <Buy mx="auto" />
            </Flex>
            <Box className="grid-container">
                <ContentTemplate className="padding-container-down-md">
                    <P mt={[6, 24, null, 0]}>{firstParagraph}</P>
                    <Skills mt={7} />
                    <Tasks mt={8} />
                </ContentTemplate>
                <ContentTemplate mt={10}>
                    <Instructors />
                </ContentTemplate>
                <ContentTemplate
                    mt={3}
                    height={[364, 264]}
                    className="padding-container-down-md"
                >
                    <Quote />
                </ContentTemplate>
            </Box>
        </Foot>
    )
}
