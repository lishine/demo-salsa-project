// !!!NOTICE: copy in _variables.scss
import React from 'react'
import { Global, css } from '@emotion/core'
import { rgb, rgba } from 'polished'

const breakpoints = ['768px', '1024px', '1440px']

export const theme = {
    breakpointsObject: {
        sm: 0,
        md: breakpoints[0],
        lg: breakpoints[1],
        xl: breakpoints[2],
    },
    breakpointsList: ['md', 'lg', 'xl'],
    breakpoints,
    radii: [0, '3px'],
    // shadows: ['inset 0 0 0 1px #929292'],
    colors: {
        primary: 'var(--primary)',
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-1': 'var(--secondary-1)',
        'secondary-2': 'var(--secondary-2)',
        tertiary: 'var(--tertiary)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        link: 'var(--link)',
        'dark-normal': 'var(--dark-normal)',
        'dark-muted': 'var(--dark-muted)',
        'dark-disabled': 'var(--dark-disabled)',
        'dark-border': 'var(--dark-border)',
        'light-normal': 'var(--light-normal)',
        'light-muted': 'var(--light-muted)',
        'light-disabled': 'var(--light-disabled)',
        'light-border': 'var(--light-border)',
        'onwhite-normal': 'var(--onwhite-normal)',
        'onwhite-menu': 'var(--onwhite-menu)',
        'onwhite-muted': 'var(--onwhite-muted)',
        'onwhite-disabled': 'var(--onwhite-disabled)',
        'onwhite-border': 'var(--onwhite-border)',
    },
    space: [...Array(30).keys()].map(n => n * 8),
}

// export const GlobalCss = () => <Global styles={process.env.NODE_ENV !== 'production' ? preview : preview} />
export const GlobalCss = () => <Global styles />
