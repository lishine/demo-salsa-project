import { action, thunk, select } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { loadModel } from 'common/models/loadModel'

// Local
import { loadFeed, loadPost } from './loadBlog'

export const blog = {
    ...loadModel(),

    isInitialized: false,
    setInitialized: action((state, isInitialized) => {
        state.isInitialized = isInitialized
    }),
    postId: undefined,
    setPostId: action((state, postId) => {
        state.postId = postId
    }),

    posts: {},
    setPost: action((state, post) => {
        state.posts[post.id] = state.posts[post.id] || {}
        Object.assign(state.posts[post.id], post, { loaded: true })
    }),
    setPosts: action((state, posts) => {
        posts.forEach(post => {
            state.posts[post.id] = post
        })
        state.feedLoaded = true
    }),
    post: select(state => state.posts[state.postId]),
    // feedLoaded: select(state => state.posts.loaded),
    postLoaded: select(state => state.post && state.post.loaded),

    loadFeed: thunk(loadFeed),
    loadPost: thunk(loadPost),
}
