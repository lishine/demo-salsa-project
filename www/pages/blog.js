import React from 'react'

// Local
import { Blog } from 'view/blog/Blog'

const Page = () => <Blog />

Page.getInitialProps = async ({ store }) => {
    if (!process.browser) {
        const postId = store.getState().router.query.id
        if (postId) {
            store.dispatch.blog.setPostId(postId)
            await store.dispatch.blog.loadPost()
        } else {
            await store.dispatch.blog.loadFeed()
        }
        store.dispatch.blog.setInitialized(true)
    }
}

export default Page
