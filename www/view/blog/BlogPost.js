import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStore, useActions } from 'easy-peasy'
import get from 'lodash/fp/get'
import dateFormat from 'dateformat'

// Common
import { P, Box, H1, Grid, Flex, Span, H3, Image } from 'styles/ss-components'
import { ChevronDown, Chevron } from 'common/svg/icons/index'
import { Map } from 'utils/utils'
import { RouteLink } from 'common/RouteLink'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { Loading } from 'view/Loading'

const path = 'blog'

const Item = ({ subHeader1, subHeader2, header, text, image, ...props }) => (
    <Box pt={6} {...props}>
        <H3 mt={7}>{header.toUpperCase()}</H3>
        <P>{subHeader1}</P>
        <P>{subHeader2}</P>
        <Image mt={5} w={1} src={image.url} alt={image.alt} />
        <P mt={5}>{text}</P>
    </Box>
)

export const BlogPost = () => {
    const loadPost = usePathActions(path, 'loadPost')

    const post = usePathStore(path, 'post')
    const err = usePathStore(path, 'err')
    const postLoaded = usePathStore(path, 'postLoaded')

    useEffect(() => {
        loadPost()
    }, [])

    if (!postLoaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    const { title, date, author, text, modularContent } = post

    return (
        <Grid
            mt={8}
            mb="133px"
            className="grid-container padding-container-down-md"
            gridTemplateColumns={[
                '0fr 1fr 0fr',
                '1fr 10fr 1fr',
                '2fr 8fr 2fr',
                '2fr 6fr 4fr',
            ]}
        >
            <Box />
            <Box>
                <P>{`${dateFormat(new Date(date), 'mmmm dd yyyy')}, by ${author}`}</P>
                <H1 mt={1} fontWeight="400">
                    {title.toUpperCase()}
                </H1>
                <P mt={4} pt={4} borderTop="1px solid var(--onwhite-border)">
                    {text}
                </P>
                <Map collection={modularContent}>
                    <Item />
                </Map>
            </Box>
            <Box />
        </Grid>
    )
}
