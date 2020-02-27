// Node - Modules
import React, { useEffect } from 'react'
import styled from '@emotion/styled'

// Common
import { P, Box, Flex, H1, H4, Span } from 'styles/ss-components'

// Common
import { QuoteBG } from 'common/QuoteBG'
import { usePathStore } from 'common/hooks/hooks'

const path = 'course'

export const Quote = props => {
    const data = usePathStore(path, 'data')
    const { citation, citationAuthor } = data

    return (
        <Flex {...props} height="100%" flexDirection="column" justifyContent="center">
            <QuoteBG pb={2}>
                <P py={1} pl={1} textAlign="center">
                    {citation}
                </P>
            </QuoteBG>
            <H4
                mt={2}
                textAlign="center"
                color="onwhite-normal"
                textShadow="0 1px 0 #FFFFFF"
            >
                {citationAuthor.toUpperCase()}
            </H4>
        </Flex>
    )
}
