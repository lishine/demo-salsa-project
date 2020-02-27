// Node - Modules
import React, { useEffect } from 'react'
import styled from '@emotion/styled'

// Common
import { P, Box, Flex, H1, H4, Span } from 'styles/ss-components'

// Common
import { Row, Col } from 'styles/grid'

export const ContentTemplate = ({ children, ...props }) => (
    <Row {...props}>
        <Col cols={[0, 1, 1, 0]} />
        <Col cols={[12, 10, 10, 7]}>{children}</Col>
        <Col cols={[0, 1, 1, 5]} />
    </Row>
)
