import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'
import { convertList } from 'utils/utils'

const getCoursePage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryCoursePage {
                coursePage {
                    seoDescription
                    title
                    iconsText
                    firstParagraph
                    skills
                    citation
                    citationAuthor
                }
            }
        `,
        props
    )

export const loadCourse = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    let { data } = await getCoursePage()
    if (data) {
        let { coursePage } = data
        coursePage.iconsText = convertList(coursePage.iconsText)
        coursePage.skills = convertList(coursePage.skills)

        actions.setData({ ...coursePage })
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
