import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Box } from 'styles/ss-components'

import { linearGradient, previewMediaQuery } from './utils'

const previewCss = css`
    background-repeat: no-repeat;
    background-position: top 0 center;

    ${previewMediaQuery('sm')} {
        background-image: ${linearGradient}, url('/static/preview/index/sm.png');
        /* background-position: top -768px center; */
    }
    ${previewMediaQuery('md')} {
        background-image: ${linearGradient}, url('/static/preview/index/md.png');
        /* background-position: top -744px center; */
    }
    ${previewMediaQuery('lg')} {
        background-image: ${linearGradient}, url('/static/preview/index/lg.png');
        /* background-position: top -672px center; */
    }
    ${previewMediaQuery('xl')} {
        background-image: ${linearGradient}, url('/static/preview/index/xl.png');
        /* background-position: top -672px center; */
    }
`

export const Preview = ({ preview, children }) => (
    <div css={preview && previewCss}>{children}</div>
)
