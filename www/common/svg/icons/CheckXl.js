import React from 'react'

export const CheckXl = ({ checked, ...props }) => (
    <svg width="20" viewBox="0 0 68 68" {...props}>
        <defs>
            <path
                id="b"
                d="M50.902 50.882c-9.434 9.491-34.391 9.491-43.826 0-9.434-9.491-9.434-34.378 0-43.809 9.434-9.431 34.391-9.431 43.826 0 9.434 9.431 9.495 34.378 0 43.809z"
            />
            <filter
                id="a"
                width="125.9%"
                height="125.9%"
                x="-12.9%"
                y="-12.9%"
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
                    values="0 0 0 0 0.8075 0 0 0 0 0.95 0 0 0 0 0.76 0 0 0 1 0"
                />
            </filter>
            <path
                id="c"
                d="M18 32.34l-8.34-8.34-2.84 2.82 11.18 11.18 24-24-2.82-2.82z"
            />
        </defs>
        <g transform="translate(5 5)" fill="none">
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill={checked ? '#2DB101' : '#E0E0E0'} xlinkHref="#b" />
            <use fill="#FFF" transform="translate(7 5)" xlinkHref="#c" />
        </g>
    </svg>
)
