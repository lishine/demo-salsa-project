import React, { useEffect } from 'react'
import { useStore } from 'easy-peasy'

import * as modals from './modals/index'

export const Modals = () => {
    const modal = useStore(state => state.modal)
    if (!modal) {
        return null
    }
    const { component, params } = modal
    const Component = modals[component]
    return <Component {...params} />
}
