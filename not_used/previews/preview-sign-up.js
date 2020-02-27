import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Box } from 'styles/ss-components'
import { linearGradient, previewMediaQuery } from './utils'

const preview = css`
    height: 1024px;

    background-repeat: no-repeat;
    background-position: top 0 center;

    ${previewMediaQuery('sm')} {
        background-image: ${linearGradient}, url('/static/preview/sign-up/sm.png');
        /* background-position: top -768px center; */
    }
    ${previewMediaQuery('md')} {
        background-image: ${linearGradient}, url('/static/preview/sign-up/md.png');
        /* background-position: top -744px center; */
    }
    ${previewMediaQuery('lg')} {
        background-image: ${linearGradient}, url('/static/preview/sign-up/lg.png');
        /* background-position: top -672px center; */
    }
    ${previewMediaQuery('xl')} {
        background-image: ${linearGradient}, url('/static/preview/sign-up/xl.png');
        /* background-position: top -672px center; */
    }
`

export const Preview = styled(Box)`
    ${props => props.preview && preview}
`
