// Common
import { post, queryDb, queryDato } from 'utils/fetch'
import { convertList } from 'utils/utils'
import { router } from 'routes'

const getTasks = async props =>
    queryDb(
        /* GraphQL */ `
            query queryTasks($userId: Int!, $programId: Int!) {
                tasks_completed(order_by: { number: asc }) {
                    number
                }
            }
        `,
        props
    )

const getPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryPage($pageId: ItemId) {
                allProgramAPages(filter: { id: { eq: $pageId } }) {
                    title
                    video {
                        url
                    }
                    paragraphA
                    list
                    numberedList {
                        ... on ProgramAPageNumberedListItemRecord {
                            _modelApiKey
                            title
                            subTitle
                            subList
                        }
                    }
                    paragraphB
                }
            }
        `,
        props
    )

export const firstLoad = async (actions, ___, { getState }) => {
    const currentPageId = getState().pageId

    if (currentPageId) {
        router.pushRoute('my-course', { pageId: currentPageId })
    } else {
        actions.navigatePage({ firstLoad: true })
    }
}

export const load = async (actions, { pageId }) => {
    actions.setLoading(true)
    await Promise.all([actions.loadTasksCompleted(), actions.loadPage({ pageId })])
    actions.setPageId({ pageId })
    actions.setLoading(false)
}

export const loadTasksCompleted = async (actions, ___, { getStoreState, dispatch }) => {
    const programId = getStoreState().common.data.program.id
    const { id: userId } = getStoreState().auth.profile
    const { data } = await getTasks({ userId, programId })
    if (data) {
        const { tasksCompleted } = data
        actions.setTasksCompleted({ tasksCompleted })
    } else {
        dispatch.setErrLoading({ message: 'Some error has occurred' })
    }
    return { data }
}

export const loadPage = async (
    actions,
    { pageId },
    { getState, getStoreState, dispatch }
) => {
    if (getState().pages[pageId]) {
        return
    }

    let { data } = await getPage({ pageId })

    if (data) {
        data = data.allProgramAPages[0]
        const { numberedList, video, list, ...rest } = data

        actions.addPage({
            [pageId]: {
                numberedList: numberedList.map(({ subList, title, subTitle }) => ({
                    subList: subList ? convertList(subList) : [],
                    title,
                    subTitle,
                })),
                list: list ? convertList(list) : [],
                video: video ? video.url : '',
                ...rest,
            },
        })
    } else {
        actions.setErr({ message: 'Some error has occurred' })
    }
}
