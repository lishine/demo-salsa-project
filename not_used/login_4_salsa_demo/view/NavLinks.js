import { css } from '@emotion/core'
import React from 'react'

import { Link } from './styled'

const flex = css`
	display: flex;
	width: 100%;
`
const box = css`
	width: 50%;
	flex: 1;
`

export default props => (
	<div css={flex}>
		<section css={box}>
			<Link shallow route="login" form="sign-up">
				Sign Up
			</Link>
		</section>
		<section css={box}>
			<Link shallow route="login" form="sign-in">
				Sign In
			</Link>
		</section>
	</div>
)
