import { listen, action, thunk, select } from 'easy-peasy'

// Common
import { post, queryDb, queryDato } from 'utils/fetch'
import { loadModel } from 'common/models/loadModel'
import { router } from 'routes'

// Local
import { loadTasksCompleted, firstLoad, load, loadPage } from './_loadMyCourse'

const upsertTaskCompleted = props => {
    return queryDb(
        /* GraphQL */ `
            mutation upsertTaskCompleted(
                $userId: Int!
                $programId: Int!
                $taskNumber: Int!
            ) {
                insert_tasks_completed(
                    objects: [
                        { user_id: $userId, program_id: $programId, number: $taskNumber }
                    ]
                    on_conflict: {
                        constraint: tasks_completed_user_id_program_id_number_key
                        update_columns: []
                    }
                ) {
                    affected_rows
                }
            }
        `,
        props
    )
}

export const myCourse = {
    ...loadModel(),
    firstLoad: thunk(firstLoad),
    load: thunk(load),
    loadTasksCompleted: thunk(loadTasksCompleted),
    loadPage: thunk(loadPage),

    pageId: undefined,
    setPageId: action((state, { pageId }) => {
        state.pageId = pageId
    }),

    pages: {},
    addPage: action((state, page) => {
        Object.assign(state.pages, page)
    }),
    page: select(state => state.pages[state.pageId]),

    tasksCompleted: [],
    setTasksCompleted: action((state, { tasksCompleted }) => {
        state.tasksCompleted = tasksCompleted
    }),
    countTasksCompleted: select(state => state.tasksCompleted.length),

    setTaskCompleted: thunk(
        async (
            actions,
            { pageId, taskNumber },
            { getState, getStoreState, dispatch }
        ) => {
            const programId = getStoreState().common.data.program.id
            const userId = getStoreState().auth.profile.id
            await upsertTaskCompleted({ userId, programId, taskNumber })
        }
    ),
    navigatePage: thunk(
        async (
            actions,
            { firstLoad, pageId, taskNumber },
            { getState, getStoreState, dispatch }
        ) => {
            const currentPageId = getState().pageId
            if (!firstLoad && pageId === currentPageId) {
                return
            }

            let push = true
            if (firstLoad) {
                const queryPageId = getStoreState().router.query.pageId
                if (queryPageId) {
                    pageId = queryPageId
                    push = false
                } else {
                    pageId = getStoreState().common.data.program.menu.before[0].pageId
                }
            }
            if (push) {
                router.pushRoute('my-course', { pageId })
            }
            await actions.load({ pageId })
            if (taskNumber) {
                actions.setTaskCompleted({ pageId, taskNumber })
            }
        }
    ),
}
