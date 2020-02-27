// General packages
import React from 'react'
import upperFirst from 'lodash/upperFirst'

// General Local
import { Box, Flex, P, H4, Card } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'

// Specific
import * as benefits from 'common/svg/front-page/benefits/index'
import { Map } from 'utils/utils'

export const Benefit = ({ index, name, title, subTitle1, subTitle2, ...props }) => (
    <Box {...props}>
        <Flex flexDirection="column" alignItems="center">
            <Flex
                alignItems="center"
                height={160}
                display={[index === 0 ? 'flex' : 'none', 'flex', 'flex', 'flex']}
            >
                {React.createElement(benefits[upperFirst(name)])}
            </Flex>
            <H4 mt={2} mb={1} color="dark-normal">
                <strong>{title.toUpperCase()}</strong>
            </H4>
            <P color="onwhite-muted" textAlign="center">
                {subTitle1}
            </P>
            <P color="onwhite-muted" textAlign="center">
                {subTitle2}
            </P>
        </Flex>
    </Box>
)

export const Benefits = ({ data }) => {
    const { benefits } = data
    return (
        <Card
            pt={[4, 4, 4, 2]}
            pb={[3, 2, 2, 1]}
            boxShadow="inset 0 8px 0 0 #fdc201, 0 14px 28px -4px rgba(0, 0, 0, 0.12),0 8px 16px -4px rgba(0, 0, 0, 0.13)"
        >
            <Row>
                <Map collection={benefits}>
                    <Benefit
                        pt={[0, 3, 3, 5]}
                        px={3}
                        pb={[3, 7, 7, 8]}
                        className="col-12 col-md-6 col-lg-4"
                    />
                </Map>
            </Row>
        </Card>
    )
}
