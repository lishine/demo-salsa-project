import React from 'react'
import { css } from '@emotion/core'

export const Vimeo = ({ link }) => {
    return (
        <div
            css={css`
                position: relative;
                height: 0px;
                overflow: hidden;
                max-width: 100%;
                padding-bottom: 56.25%;
                box-shadow: 0 40px 72px -12px rgba(0, 0, 0, 0.12),
                    0 24px 24px -8px rgba(0, 0, 0, 0.16);
                /* border-radius: var(--border-radius); */
            `}
        >
            <iframe
                css={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                `}
                src={link || 'https://player.vimeo.com/video/312244841'}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    )
}
