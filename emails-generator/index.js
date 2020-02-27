import React from 'react'
import { css } from '@emotion/core'

const Link = ({ name }) => {
    return (
        <section
            css={css`
                height: 4em;
                width: 20em;
                display: flex;
                justify-content: center;
                align-items: center;
            `}
        >
            <a href={`${name}.html`}>{name}</a>
        </section>
    )
}

export const Links = ({ names }) => (
    <ul
        css={css`
            font-family: 'Raleway', sans-serif;
            font-size: 41px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}
    >
        {names.map(name => (
            <Link key={name} name={name}  />
        ))}
    </ul>
)
