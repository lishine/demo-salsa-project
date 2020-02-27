import React, { useEffect } from 'react'
import get from 'lodash/fp/get'

// Common
import { usePathStore, usePathActions } from 'common/hooks/hooks'

// Local
import { BlogPost } from './BlogPost'
import { BlogFeed } from './BlogFeed'

const path = 'blog'

export const Blog = () => {
    const postId = usePathStore('router.query.id')
    const isInitialized = usePathStore(path, 'isInitialized')

    const setInitialized = usePathActions(path, 'setInitialized')
    const setPostId = usePathActions(path, 'setPostId')

    useEffect(() => {
        setPostId(postId)
        setInitialized(true)
    }, [])
    if (!isInitialized) {
        return null
    }

    if (postId) {
        return <BlogPost />
    } else {
        return <BlogFeed />
    }
}
