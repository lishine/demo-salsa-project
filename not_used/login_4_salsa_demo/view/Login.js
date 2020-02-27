import React from 'react'
import { css } from '@emotion/core'
import { useStore, useAction } from 'easy-peasy'
import * as selectors from 'view/login/logic/selectors'

import Form from './form/Form'
import NavLinks from './NavLinks'
import Alert from './Alert'

const flex = css`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 100%;
`

const box = css`
	display: flex;
`

export default () => {
	const alert = useStore(state => state.login.alert)

	return (
		<div
			css={css`
				/* margin-right: -50%; */
				display: flex;
				transform: translate(-50%, -50%);
				top: 50%;
				left: 50%;
				/* right: auto; */
				/* bottom: auto; */
				border: 1px solid #ccc;
				color: yellow;
				background: #f4f6f8;
				/* overflow: 'auto'; */
				border-radius: 4px;
				outline: none;
				padding: 0px;
				width: 320px;
				position: absolute;
			`}>
			{alert ? (
				<Alert />
			) : (
				<div css={flex}>
					<section css={box}>
						<NavLinks />
					</section>
					<section css={box}>
						<Form />
					</section>
				</div>
			)}
		</div>
	)
}
