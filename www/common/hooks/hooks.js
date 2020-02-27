import React, { useState, useEffect } from 'react'
import { useStore as _useStore, useActions as _useActions } from 'easy-peasy'
import get from 'lodash/fp/get'

export const usePathActions = (path, inPath) => {
    if (inPath) {
        return _useActions(actions => get(inPath)(get(path)(actions)))
    } else {
        return _useActions(actions => get(path)(actions))
    }
}

export const usePathStore = (path, inPath) => {
    if (inPath) {
        return _useStore(state => get(inPath)(get(path)(state)))
    } else {
        return _useStore(state => get(path)(state))
    }
}

export const useToggle = _state => {
    const [state, setState] = useState(_state)
    const toggleState = () => setState(!state)
    return [state, toggleState, setState]
}
