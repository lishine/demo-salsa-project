import React, { useEffect } from 'react'
import get from 'lodash/fp/get'
import dateFormat from 'dateformat'

// Common
import { Form, P, Box, H1, Grid, Flex, H4, Svg, Span } from 'styles/ss-components'
import { ChevronDown, Chevron } from 'common/svg/icons/index'
import { Map } from 'utils/utils'
import { RouteLink } from 'common/RouteLink'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { Loading } from 'view/Loading'

const path = 'blog'

const Item = ({ index, id, date, title, description, ...props }) => (
    <Box pt={6} borderTop={index > 0 ? '1px solid var(--onwhite-border)' : ''} {...props}>
        <P>{dateFormat(new Date(date), 'mmmm dd yyyy')}</P>
        <H1 mt={3} fontWeight="400">
            {title.toUpperCase()}
        </H1>
        <P mt={3}>
            {description}{' '}
            <Span whiteSpace="nowrap">
                <RouteLink route="blog-post" id={id}>
                    Full article
                </RouteLink>
                <Svg ml={['-3px', '-3px', '1px', '1px']}>
                    <Chevron fill="var(--onwhite-disabled)" />
                </Svg>
            </Span>
        </P>
    </Box>
)

export const BlogFeed = () => {
    const loadFeed = usePathActions(path, 'loadFeed')
    const err = usePathStore(path, 'err')
    const posts = usePathStore(path, 'posts')
    const feedLoaded = usePathStore(path, 'feedLoaded')
    useEffect(() => {
        loadFeed()
    }, [])

    if (!feedLoaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    return (
        <Grid
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
                <Map collection={Object.values(posts)}>
                    <Item mt={5} />
                </Map>
            </Box>
            <Box />
        </Grid>
    )
}
