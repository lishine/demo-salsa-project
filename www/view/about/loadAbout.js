import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'

const getAboutPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryAboutPage {
                aboutPage {
                    seoDescription
                    title
                    text1
                    image {
                        url
                        alt
                    }
                    text2
                    foundersTitle
                    founders {
                        ... on AboutPageFounderRecord {
                            image {
                                url
                                alt
                            }
                            name
                            description
                            text
                        }
                    }
                }
            }
        `,
        props
    )

export const loadAbout = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }

    const { data } = await getAboutPage()
    if (data) {
        actions.setData(data.aboutPage)
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
