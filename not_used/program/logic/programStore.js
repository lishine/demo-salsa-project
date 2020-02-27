import { action } from 'easy-peasy'

const init = { menus: {} }

export const programStore = {
    ...init,
    reset: action(state => {
        Object.assign(state, init)
    }),
    addMenu: action((state, { id, menu }) => {
        state.menus[id] = menu
    }),
}
