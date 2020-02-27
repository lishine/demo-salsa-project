import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'

const getFaqPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryfaqPage {
                faqPage {
                    seoDescription
                    title
                    questions {
                        ... on FaqPageQuestionRecord {
                            question
                            answer
                        }
                    }
                }
            }
        `,
        props
    )

export const loadFaq = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    const { data } = await getFaqPage()
    if (data) {
        actions.setData(data.faqPage)
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
