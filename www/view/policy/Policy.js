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
import { TextContainer } from 'styles/components'

const path = 'policy'

export const Policy = () => {
    const data = usePathStore(path, 'data')
    const loadPolicy = usePathActions(path, 'loadPolicy')
    const err = usePathStore(path, 'err')
    const loaded = usePathStore(path, 'loaded')
    useEffect(() => {
        loadPolicy()
    }, [])

    if (!loaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    const { title, text } = data

    return (
        <TextContainer mt={8} mb="133px" className="grid-container">
            <H1>{title.toUpperCase()}</H1>
            <P mt={3} whiteSpace="pre-wrap">
                {text}
            </P>
        </TextContainer>
    )
}
