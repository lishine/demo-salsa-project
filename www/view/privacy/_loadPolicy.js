mport isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from './node_modules/utils/fetch'

const getPolicyPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryPolicyPage {
                policyPage {
                    title
                    text
                }
            }
        `,
        props
    )

export const loadPolicy = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    const { data } = await getPolicyPage()
    if (data) {
        actions.setData(data.policyPage)
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
