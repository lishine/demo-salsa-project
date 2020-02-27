import { action, thunk, select } from 'easy-peasy'

export const loadModel = () => ({
    loading: true,
    setLoading: action((state, loading) => {
        state.loading = loading
    }),

    loaded: false,
    setLoaded: action((state, loaded) => {
        state.loaded = loaded
    }),

    setData: action((state, data) => {
        state.data = data
    }),
    assignData: action((state, data) => {
        state.data = state.data || {}
        Object.assign(state.data, data)
    }),

    err: undefined,
    setErr: action((state, err) => {
        state.err = err
    }),

    timeOut: undefined,
    setTimeOut: action((state, timeOut) => {
        state.timeOut = timeOut
    }),
})
