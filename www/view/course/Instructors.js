import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import { Box, P, Svg, H3, Span, H6, Image, H2, H1 } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'
import { Chevron } from 'common/svg/icons/Chevron'
import { RouteLink } from 'common/RouteLink'
import { usePathStore } from 'common/hooks/hooks'
import { Map } from 'utils/utils'

export const Instructor = ({ name, image, roles }) => {
    const rolesSmall = roles.slice(0, 2).join(',')
    const rolesLarge = roles.slice(2).join(',')

    return (
        <Box height={168} position="relative" pl={[20, 20, 22, 22]} pr={1}>
            <Box height={207} position="absolute" left={0} bottom={0} overflow="hidden">
                <Image
                    height="100%"
                    ml={['-20px', '-14px', 0, 0]}
                    src={image.url}
                    alt={image.alt}
                />
            </Box>
            <H6 pt={[3, 3, '20px', '20px']} pb={[0, 0, '4px', '4px']}>
                {name.toUpperCase()}
            </H6>
            <P color="dark-muted">
                {rolesSmall}
                <Span display={['none', 'none', 'inline']}>, {rolesLarge}</Span>
            </P>
            <P ml={[0, 0, 0, 0]}>
                <RouteLink route="home">Learn more</RouteLink>
                <Svg ml={['-3px', '-3px', '1px', '1px']}>
                    <Chevron fill="var(--light-muted)" />
                </Svg>
            </P>
        </Box>
    )
}

export const Instructors = props => {
    const { instructors } = usePathStore('common', 'data.general')

    return (
        <Box {...props}>
            <H3 className="course" ml={2}>
                <strong>DANCE</strong> INSTRUCTORS
            </H3>
            <Row mt={7}>
                <Map collection={instructors}>
                    {(instructor, index) => (
                        <Col cols={[12, 6, 6, 6]}>
                            <Box bg="primary" pr={[0, 1]} mb={5}>
                                <Instructor {...instructor} index={index} />
                            </Box>
                        </Col>
                    )}
                </Map>
            </Row>
        </Box>
    )
}
