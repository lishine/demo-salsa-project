import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'

const getPolicyPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryPolicyPage {
                privacyPolicyPage {
                    title
                    text
                }
            }
        `,
        props
    )

export const loadPolicy = async (actions, ___, { getState }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    const { data } = await getPolicyPage()
    if (data) {
        actions.setData(data.privacyPolicyPage)
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
