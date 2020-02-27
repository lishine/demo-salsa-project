import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Card, Box, Flex, P, H3, Span, H6, Image } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'
import { QuoteBG } from 'common/QuoteBG'
import { Map } from 'utils/utils'

const localData = [{ emoji: '😄' }, {}, { emoji: '😊' }]

const Avatar = styled(Box)`
    background-repeat: no-repeat;
    background-image: url(/static/svg/avatar-mask.svg);
    background-size: auto auto;
    background-position: center;
    padding: 5px;
    clip-path: url(/static/svg/avatar.svg);
`

export const Feedback = ({ index, name, text, image, ...props }) => (
    <Col {...props}>
        <Card
            mt={[3, 6]}
            boxShadow="0 14px 28px -4px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.13)"
        >
            <Flex
                bg="primary"
                height={[80, 80, 96, 96]}
                py={1}
                pl={[2]}
                justifyContent="space-between"
                alignItems="center"
            >
                <Avatar>
                    <Image
                        height={['55px', '60px', '110%', '110%']}
                        src={image.url}
                        alt={image.alt}
                    />
                </Avatar>
                <H6 mx="auto" noBaselineShift>
                    {name.toUpperCase()}
                </H6>
            </Flex>
            <Box pb={[2]} pt={['12px']} px={[2]}>
                <QuoteBG pb={2} pt={['4px']}>
                    <P py={1} textAlign="center">
                        {text}
                        <Span
                            display="inline-block"
                            mt={-1}
                            position="relative"
                            top="2px"
                            fontSize="20px"
                        >
                            {localData[index].emoji}
                        </Span>
                    </P>
                </QuoteBG>
            </Box>
        </Card>
    </Col>
)

export const Feedbacks = ({ data }) => (
    <Box pt={[6, 7, 12]} pb={5}>
        <H3 textAlign="center">
            <strong>FEEDBACK</strong> FROM OUR STUDENTS
        </H3>
        <Row>
            <Map collection={data.feedbacks}>
                <Feedback cols={[12, 4, 4, 4]} />
            </Map>
        </Row>
    </Box>
)
