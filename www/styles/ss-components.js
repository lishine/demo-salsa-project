// NODE_MODULES
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import shouldForwardProp from '@styled-system/should-forward-prop'

// Local
import { boxParamsArray } from './ss-utils'

export const Box = styled('div', { shouldForwardProp })(boxParamsArray)

// ... Rest is based on Box

export const Grid = styled(Box)()
Grid.defaultProps = {
    display: 'grid',
}

export const Form = styled(Box)()
Form.defaultProps = {
    as: 'form',
}

export const Flex = styled(Box)()
Flex.defaultProps = {
    display: 'flex',
}

export const Span = styled(Box)()
Span.defaultProps = {
    as: 'span',
}

export const Svg = styled(Box)()
Svg.defaultProps = {
    as: 'span',
}

export const SvgIcon = styled(Box)()
SvgIcon.defaultProps = {
    as: 'span',
    display: 'inline-block',
    transform: 'translateY(-1px)',
}

export const H1 = styled(Box)()
H1.defaultProps = {
    as: 'h1',
    dark: true,
}

export const H2 = styled(Box)()
H2.defaultProps = {
    as: 'h2',
    dark: true,
}

export const H3 = styled(Box)()
H3.defaultProps = {
    as: 'h3',
    dark: true,
}

export const H4 = styled(Box)()
H4.defaultProps = {
    as: 'h4',
    dark: true,
}
H4.propTypes = {}
H4.propTypes.notmobile = PropTypes.bool

export const H5 = styled(Box)()
H5.defaultProps = {
    as: 'h5',
}

export const H6 = styled(Box)()
H6.defaultProps = {
    as: 'h6',
}

export const P = styled(Box)()
P.defaultProps = {
    as: 'p',
}

const loadingCss = css`
    transform: scale(0.65) translate(0px, -13px);
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
    }
    div:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fff;
        margin: -3px 0 0 -3px;
    }
    div:nth-of-type(1) {
        animation-delay: -0.036s;
    }
    div:nth-of-type(1):after {
        top: 50px;
        left: 50px;
    }
    div:nth-of-type(2) {
        animation-delay: -0.072s;
    }
    div:nth-of-type(2):after {
        top: 54px;
        left: 45px;
    }
    div:nth-of-type(3) {
        animation-delay: -0.108s;
    }
    div:nth-of-type(3):after {
        top: 57px;
        left: 39px;
    }
    div:nth-of-type(4) {
        animation-delay: -0.144s;
    }
    div:nth-of-type(4):after {
        top: 58px;
        left: 32px;
    }
    div:nth-of-type(5) {
        animation-delay: -0.18s;
    }
    div:nth-of-type(5):after {
        top: 57px;
        left: 25px;
    }
    div:nth-of-type(6) {
        animation-delay: -0.216s;
    }
    div:nth-of-type(6):after {
        top: 54px;
        left: 19px;
    }
    div:nth-of-type(7) {
        animation-delay: -0.252s;
    }
    div:nth-of-type(7):after {
        top: 50px;
        left: 14px;
    }
    div:nth-of-type(8) {
        animation-delay: -0.288s;
    }
    div:nth-of-type(8):after {
        top: 45px;
        left: 10px;
    }
    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Loading = () => (
    <div css={loadingCss}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
)

export const Button = ({ children, loading, ...props }) => (
    <Box {...props} position="relative">
        {loading && <Loading />}
        {!loading && children}
    </Box>
)

Button.defaultProps = {
    as: 'button',
    type: 'button',
}

export const Section = styled(Box)()
Section.defaultProps = {
    as: 'section',
}
export const OL = styled(Box)()
OL.defaultProps = {
    as: 'ol',
}
export const DT = styled(Box)()
DT.defaultProps = {
    as: 'dt',
}
export const DD = styled(Box)()
DD.defaultProps = {
    as: 'dd',
}
export const DL = styled(Box)()
DL.defaultProps = {
    as: 'dl',
}

export const Image = styled(Box)()
Image.defaultProps = {
    as: 'img',
}

export const UL = styled(Box)`
    list-style: none;
    position: relative;
    padding: 0;
    margin: 0;
`
UL.defaultProps = {
    as: 'ul',
}

const liPadding = '0.8em'
export const LI = styled(Box)`
    padding-left: ${liPadding};
    text-indent: ${props => (props.textIndent ? 0 : `-${liPadding}`)};

    &:before {
        position: absolute;
        content: '•';
        color: var(--primary);
        left: 0;
    }
`
LI.defaultProps = {
    as: 'li',
    textIndent: true,
}

// export const LI = ({ dotColor, ...props }) => (
//     <li css={{ color: dotColor }}>
//         <Span color="initial" {...props} />
//     </li>
// )

// const cards = variant({ key: 'cards' })

export const Card = styled(Box)()

export const NavLink = ({ onClick, loading, children, ...props }) => {
    const _onClick = e => {
        console.log('onClick', onClick)
        if (onClick) {
            e.preventDefault()
            e.stopPropagation()
            onClick()
        }
    }
    return (
        <Box onClick={_onClick} {...props}>
            {loading && <Loading />}
            {!loading && children}
        </Box>
    )
}

NavLink.defaultProps = {
    as: 'a',
    href: '',
}
