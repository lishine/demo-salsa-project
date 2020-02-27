const active = {
    textDecoration: 'none',
    borderBottom: '2px solid currentColor',
    color: 'primary',
}

export const mainLinkStyle = {
    text: 'menu',
    p: 1,
    color: 'light-normal',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    ':hover': active,
    '&.active': active,
}
