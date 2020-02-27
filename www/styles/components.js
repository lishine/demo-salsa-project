import React, { useEffect } from 'react'
import { Box } from 'styles/ss-components'

export const Container = ({ children, ...props }) => (
    <Box display="grid" {...props}>
        <Box />
        <Box>{children}</Box>
        <Box />
    </Box>
)
export const TextContainer = props => (
    <Container
        gridTemplateColumns={[
            '0fr 1fr 0fr',
            '1fr 10fr 1fr',
            '2fr 8fr 2fr',
            '2fr 6fr 4fr',
        ]}
        px={['var(--padding-container)', 'var(--padding-container)', null, null]}
        {...props}
    />
)
