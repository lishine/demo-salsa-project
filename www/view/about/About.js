import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStore, useActions } from 'easy-peasy'
import get from 'lodash/fp/get'

// Common
import { Form, P, Box, H1, Image, Grid, H3, H2, Span, Flex } from 'styles/ss-components'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { Map } from 'utils/utils'
import { Loading } from 'view/Loading'

const path = 'about'

const Container = ({ children, ...props }) => (
    <Box display="grid" {...props}>
        <Box />
        <Box>{children}</Box>
        <Box />
    </Box>
)
const TextContainer = props => (
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
const PictureContainer = props => (
    <Container
        gridTemplateColumns={['0fr 1fr 0fr', null, '1fr 10fr 1fr', '1fr 8fr 3fr']}
        paddingContainer={[null, 'var(--padding-container)', null, null]}
        {...props}
    />
)

const TextOverlay = ({ children, ...props }) => (
    <TextContainer>
        <Box mt={[0, 0, -13]} py={6} px={6} mx={-6} {...props}>
            {children}
        </Box>
    </TextContainer>
)

const Founder = ({ index, text, description, name, image, ...props }) => {
    let bg, nameColor
    const color = 'light-normal'
    if (index === 0) {
        bg = 'secondary'
        nameColor = 'primary'
    } else {
        bg = 'primary'
        nameColor = 'light-normal'
    }

    return (
        <Box {...props}>
            <PictureContainer>
                <Image w={1} src={image.url} alt={image.alt} />
            </PictureContainer>
            <TextOverlay bg={bg}>
                <H3 color={nameColor}>{name}</H3>
                <H2 color={color}>{description}</H2>
                <P color={color} mt={3}>
                    {text}
                </P>
            </TextOverlay>
        </Box>
    )
}

export const About = () => {
    const data = usePathStore(path, 'data')

    const loadAbout = usePathActions(path, 'loadAbout')

    const err = usePathStore(path, 'err')
    const loaded = usePathStore(path, 'loaded')
    useEffect(() => {
        loadAbout()
    }, [])

    if (!loaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    const { title, text1, image, text2, foundersTitle, founders } = data

    return (
        <Box mt={8} mb="133px" className="grid-container">
            <TextContainer>
                <H1>{title.toUpperCase()}</H1>
            </TextContainer>
            <TextContainer mt={8}>{text1}</TextContainer>
            <PictureContainer mt={5}>
                <Image w={1} src={image.url} alt={image.alt} />
            </PictureContainer>
            <TextContainer mt={6}>{text2}</TextContainer>

            <TextContainer mt={7}>
                <H3>{foundersTitle.toUpperCase()}</H3>
            </TextContainer>

            <Map collection={founders}>
                <Founder mt={5} />
            </Map>
        </Box>
    )
}
