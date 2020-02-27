export const linearGradient = `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255,0.1))`

const bks = {
    sm: `@media screen and (min-width: 317px) and (max-width: 323px)`,
    md: `@media screen and (min-width: 769px) and (max-width: 774px)`,
    lg: `@media screen and (min-width: 1025px) and (max-width: 1032px)`,
    xl: `@media screen and (min-width: 1910px) and (max-width: 1930px)`,
}

export const previewMediaQuery = bk => bks[bk]
