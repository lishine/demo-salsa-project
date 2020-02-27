import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'

const getContactUsPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryContactUsPage {
                contactUsPage {
                    seoDescription
                    title
                    text
                }
            }
        `,
        props
    )

export const loadContactUs = async (
    actions,
    ___,
    { getState, getStoreState, dispatch }
) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    const { data } = await getContactUsPage()
    if (data) {
        actions.setData(data.contactUsPage)
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
