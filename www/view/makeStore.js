import get from 'lodash/fp/get'
import { createStore, action } from 'easy-peasy'

import { model, updateInitialState, initialState } from './model'

const subscribers = {}
function subsc(key, cb) {
    if (subscribers.hasOwnProperty(key)) {
        subscribers[key].push(cb)
    } else {
        subscribers[key] = [cb]
    }

    return function() {
        subscribers[key] = subscribers[key].filter(s => s !== cb)
    }
}

function initSubscriber(store) {
    let prevState = store.getState()

    console.log('INIT subscribing')
    store.subscribe(() => {
        const subs = []
        const newState = store.getState()
        Object.keys(subscribers).forEach(key => {
            if (get(key)(prevState) !== get(key)(newState)) {
                subscribers[key].forEach(cb => subs.push(cb))
            }
        })

        prevState = newState
        subs.forEach(cb => cb(store))
    })

    return subsc
}

export let subscribe

export const makeStore = (updatedState, options) => {
    console.log('MAKING STORE')
    // console.log('model', JSON.stringify(model(), 0, 2))
    const store = createStore(model(), { initialState: updatedState })
    if (process.browser) {
        subscribe = initSubscriber(store)
    }
    console.log('CREATED')
    // if (process.env.NODE_ENV === 'development') {
    //     if (module.hot) {
    //         module.hot.accept('./model', () => {
    //             store.reconfigure(model(), { initialState: updatedState }) // 👈 Here is the magic
    //         })
    //     }
    // }
    if (!updatedState) {
        console.log('*** updating global-var initialState on the server')
        // console.log('store.getState()', store.getState())
        updateInitialState(store.getState())
        store.dispatch.setSSRInitialState(initialState)
        updateInitialState(store.getState())
    } else {
        console.log('*** updating global-var initialState after store mutated')
        updateInitialState(store.getState().ssrInitialState)
    }

    return store
}
