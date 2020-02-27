import React from 'react'
import styled from '@emotion/styled'

import { Box } from 'styles/ss-components'

export const QuoteBG = styled(Box)`
    background-repeat: no-repeat;
    background-image: url(/static/svg/quote-open.svg), url(/static/svg/quote-close.svg);
    background-size: auto auto, auto auto;
    background-position: left top, right bottom;
`
