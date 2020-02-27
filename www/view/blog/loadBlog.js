import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'

const getPosts = async props =>
    queryDato(
        /* GraphQL */ `
            query queryBlog {
                allBlogPosts(first: 100) {
                    id
                    date
                    description
                    seoDescription
                    title
                }
            }
        `,
        props
    )

const getPost = async props =>
    queryDato(
        /* GraphQL */ `
            query queryBlog($postId: ItemId) {
                allBlogPosts(filter: { id: { eq: $postId } }) {
                    seoDescription
                    date
                    author
                    title
                    text
                    modularContent {
                        ... on BlogPostModularContentRecord {
                            _modelApiKey
                            header
                            subHeader1
                            subHeader2
                            image {
                                url
                                alt
                            }
                            text
                        }
                    }
                }
            }
        `,
        props
    )

export const loadFeed = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { feedLoaded } = getState()
    if (feedLoaded) {
        return
    }
    const { data } = await getPosts()
    if (data) {
        actions.setData(data.allBlogPosts)
        actions.setPosts(data.allBlogPosts)
    } else {
        actions.setErr('Some error has occurred')
    }
}

export const loadPost = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { postLoaded } = getState()
    if (postLoaded) {
        return
    }
    const { postId } = getState()
    const { data } = await getPost({ postId })
    if (data) {
        actions.setData(data.allBlogPosts[0])
        actions.setPost(data.allBlogPosts[0])
    } else {
        actions.setErr('Some error has occurred')
    }
}
