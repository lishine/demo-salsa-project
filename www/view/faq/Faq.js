import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStore, useActions } from 'easy-peasy'
import get from 'lodash/fp/get'

// Common
import { Form, P, Box, H1, Grid, Span, Flex, H4 } from 'styles/ss-components'
import { useToggle, usePathStore, usePathActions } from 'common/hooks/hooks'
import { ChevronDown } from 'common/svg/icons/index'
import { Map } from 'utils/utils'
import { Loading } from 'view/Loading'

const path = 'faq'

const Item = ({ question, answer, ...props }) => {
    const [state, toggleState] = useToggle(false)
    return (
        <Box {...props}>
            <Flex
                px={3}
                py={1}
                justifyContent="space-between"
                onClick={toggleState}
                cursor="pointer"
                border="1px solid #E1E1E1"
                boxShadow={state ? 'inset 0 0 0 1px rgba(0,0,0,0.12)' : ''}
                bg={state ? 'primary' : ''}
            >
                <strong color="onwhite-normal">{question}</strong>
                <ChevronDown
                    fill="var(--dark-disabled)"
                    transform={state ? 'rotate(180)' : ''}
                />
            </Flex>
            <Box
                px={3}
                pt={2}
                pb={3}
                color="dark-normal"
                display={state ? 'block' : 'none'}
                bg={state ? '#FFFAEB' : ''}
            >
                {answer}
            </Box>
        </Box>
    )
}

export const Faq = () => {
    const data = usePathStore(path, 'data')
    const err = usePathStore(path, 'err')
    const loaded = usePathStore(path, 'loaded')

    const loadFaq = usePathActions(path, 'loadFaq')

    useEffect(() => {
        loadFaq()
    }, [])

    if (!loaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    return (
        <Grid
            mt={8}
            mb="133px"
            className="grid-container"
            gridTemplateColumns={[
                '0fr 1fr 0fr',
                '1fr 10fr 1fr',
                '2fr 8fr 2fr',
                '2fr 5fr 5fr',
            ]}
        >
            <Box />
            <Box>
                <H1 fontWeight="400" className="padding-container-down-md">
                    {data.title.toUpperCase()}
                </H1>
                <Box
                    mt={6}
                    boxShadow="0 14px 28px -4px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.13)"
                >
                    <Map collection={data.questions}>
                        <Item />
                    </Map>
                </Box>
            </Box>
            <Box />
        </Grid>
    )
}
