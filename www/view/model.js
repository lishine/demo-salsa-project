import get from 'lodash/fp/get'
import { action, createStore, thunk } from 'easy-peasy'

// Common
import { post } from 'utils/fetch'

// Local
import { login } from 'view/login/logic/store'
import { myCourse } from 'view/myCourse/_myCourse'
import { myProfile } from 'view/myProfile/_myProfile'
import { contactUs } from 'view/ContactUs/_contactUs'
import { footer } from 'view/footer/_footer'
import { about } from 'view/about/_about'
import { faq } from 'view/faq/_faq'
import { blog } from 'view/blog/_blog'
import { course } from 'view/course/_course'
import { front } from 'view/front/_front'
import { terms } from 'view/terms/_terms'
import { policy } from 'view/policy/_policy'
import { loadModel } from 'common/models/loadModel'
import { loadCommon } from './_loadCommon'

export let initialState = {}
export const updateInitialState = _initialState => (initialState = _initialState)

export const model = () => ({
    ssrInitialState: {},
    setSSRInitialState: action((state, ssrInitialState) => {
        state.ssrInitialState = ssrInitialState
    }),
    reset: action(state => {
        state.modal = undefined
    }),

    common: {
        data: {},
        ...loadModel(),
        loadCommon: thunk(loadCommon),
    },

    modalOpen: false,
    modal: undefined,
    openModal: action((state, modal) => {
        state.modalOpen = true
        if (modal) {
            state.modal = modal
        }
    }),
    closeModal: action(state => {
        state.modalOpen = false
        state.modal = undefined
    }),

    router: {
        pathname: undefined,
        query: undefined,
        asPath: undefined,
        route: undefined,
        set: action((state, newState) => {
            Object.assign(state, newState)
        }),
    },
    auth: {
        isAuth: false,
        setAuth: action((state, isAuth) => {
            state.isAuth = isAuth
        }),
        profile: undefined,
        setProfile: action((state, profile) => {
            state.profile = profile
        }),

        showLogin: thunk((__actions, __payload, { dispatch }) => {
            dispatch.openModal({
                component: 'Login',
                params: { form: 'SignIn' },
            })
        }),

        logout: thunk(async actions => {
            actions.setAuth(false)
            await post({ url: `${process.env.API_URL}/api/auth/logout` })
        }),

        loadProfile: thunk(async actions => {
            const { data, err, timeOut } = await post({
                url: `${process.env.API_URL}/api/auth/profile`,
            })
            console.log('*** profile data', data)

            if (data) {
                actions.setProfile(data.user)
            } else {
                console.error('err / timeOut', err, timeOut)
            }
        }),

        enter: thunk(async actions => {
            actions.setAuth(true)
            await actions.loadProfile()
        }),
    },
    myCourse,
    login,
    footer,
    contactUs,
    myProfile: myProfile(),
    about,
    faq,
    blog,
    course,
    terms,
    policy,
    front: front(),
})
