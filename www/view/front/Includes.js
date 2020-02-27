import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import withProps from 'recompose/withProps'

import { Box, Flex, P, H1, H4, Svg } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'

import { Check } from 'common/svg/icons/Check'
import { Chevron } from 'common/svg/icons/Chevron'
import { RouteLink } from 'common/RouteLink'
import { Map } from 'utils/utils'

export const Include = ({ index, text }) => (
    <Flex
        mb={3}
        mr={[0, 0, '10px', 2]}
        display={[index < 3 ? 'flex' : 'none', 'flex', 'flex', 'flex']}
        width={[1, 1, 1 / 2, 1 / 2]}
    >
        <P pl={[0, 3, 1, 1]} pr={2}>
            <Svg>
                <Check />
            </Svg>
        </P>
        <P pr={[0, 0, 4, 4]} className="wrap-md">
            {text}
        </P>
    </Flex>
)

export const Includes = ({ data }) => (
    <Box mt={[7, 11, 11, 11]}>
        <H1 mb={[2, 3, 3, 3]} className="cursive-1" textAlign="center">
            {data.includesTitle.toUpperCase()}
        </H1>
        <Row mb={[4, 4, 4, 4]}>
            <Col cols={[0, 0, 1, 2]} />
            <Col cols={[12, 12, 10, 8]}>
                <H4 mb={1} textAlign="center">
                    {data.includesSubTitle}
                </H4>
            </Col>
            <Col cols={[0, 0, 1, 1]} />
        </Row>
        <Flex
            ml={['-3px', '-3px', '-5px', '-5px']}
            height={['auto', 'auto', 330, 330]}
            flexDirection="column"
            flexWrap="wrap"
        >
            <Map collection={data.includes}>
                <Include />
            </Map>

            <P ml={[5, 8, 6, 6]}>
                <RouteLink route="home">Learn more</RouteLink>
                <Svg ml={['-3px', '-3px', '1px', '1px']}>
                    <Chevron fill="var(--onwhite-disabled)" />
                </Svg>
            </P>
        </Flex>
    </Box>
)
