import React from 'react'
import styled from '@emotion/styled'

import { Card, Box, P, Svg, H3, Span, H6, Image } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'
import { mediaUp } from 'styles/utils'
import { Chevron } from 'common/svg/icons/Chevron'
import { RouteLink } from 'common/RouteLink'
import { Map } from 'utils/utils'
import { usePathStore } from 'common/hooks/hooks'

export const Instructor = ({ image, name, roles, ...props }) => {
    const rolesSmall = roles.slice(0, 2).join(',')
    const rolesLarge = roles.slice(2).join(',')
    return (
        <Col {...props}>
            <Box mb={1} pr={1} boxShadow="inset 0 0 0 1px #FFF">
                <Box height={168} position="relative" pl={[17, 20, 22, 22]} pr={1}>
                    <Box
                        height={[162, 207, 207, 207]}
                        position="absolute"
                        left={1}
                        bottom={1}
                        overflow="hidden"
                    >
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
            </Box>
        </Col>
    )
}

const BorderedCard = styled(Card)`
    border-radius: var(--border-radius);
    ${mediaUp('lg')} {
        border-radius: 0;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }
`

export const Instructors = () => {
    const { instructorsImage, instructors } = usePathStore('common', 'data.general')

    return (
        <BorderedCard
            overflow="hidden"
            bg="primary"
            pb={[2, 5, 5, 0]}
            px={[2, 0]}
            mt={[8, 8, 3, 1]}
            position="relative"
        >
            <Image
                position="absolute"
                left="-8px"
                top="-15px"
                src="/static/svg/lens.svg"
            />
            <Row>
                <Col cols={[0, 0, 1, 0]} />
                <Col cols={[12, 12, 10, 8]}>
                    <Box px={[0, 3, 0, 5]} pt={[7, 8, 7, 6]}>
                        <H3
                            pb={[0, 1, 1, 1]}
                            textAlign={['center', 'center', 'center', 'left']}
                        >
                            <strong>OUR PROFESSIONAL</strong> DANCE INSTRUCTORS
                        </H3>
                        <Row mt={8}>
                            <Map collection={instructors}>
                                <Instructor cols={[12, 6, 6, 6]} />
                            </Map>
                        </Row>
                    </Box>
                </Col>
                <Col cols={[0, 0, 1, 0]} />
                <Col cols={[0, 0, 0, 4]}>
                    <Image
                        width={1}
                        src={instructorsImage.url}
                        alt={instructorsImage.alt}
                    />
                </Col>
            </Row>
        </BorderedCard>
    )
}
