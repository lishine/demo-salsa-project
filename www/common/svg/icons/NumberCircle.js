import React from 'react'

export const NumberCircle = props => (
    <svg width="56" viewBox="0 0 56 56" {...props}>
        <defs>
            <path
                id="b"
                d="M45.37 45.354c-7.482 7.527-27.276 7.527-34.758 0-7.482-7.527-7.482-27.265 0-34.745 7.482-7.48 27.276-7.48 34.758 0 7.482 7.48 7.53 27.265 0 34.745z"
            />
            <filter
                id="a"
                width="132.6%"
                height="132.6%"
                x="-16.3%"
                y="-16.3%"
                filterUnits="objectBoundingBox"
            >
                <feMorphology
                    in="SourceAlpha"
                    operator="dilate"
                    radius="2.5"
                    result="shadowSpreadOuter1"
                />
                <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                <feColorMatrix
                    in="shadowOffsetOuter1"
                    values="0 0 0 0 1 0 0 0 0 0.905882353 0 0 0 0 0.6 0 0 0 1 0"
                />
            </filter>
        </defs>
        <g fill="none">
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="#FDC201" xlinkHref="#b" />
        </g>
    </svg>
)
