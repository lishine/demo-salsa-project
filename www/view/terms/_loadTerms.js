import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'

const getTermsPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryTermsPage {
                termsPage {
                    title
                    text
                }
            }
        `,
        props
    )

export const loadTerms = async (actions, ___, { getState }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    const { data } = await getTermsPage()
    if (data) {
        actions.setData(data.termsPage)
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
