import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'
import { convertList } from 'utils/utils'

const getFrontPage = async props =>
    queryDato(
        /* GraphQL */ `
            query queryFrontPage {
                frontPage {
                    seoDescription
                    header1
                    text1
                    videoText
                    video {
                        url
                    }
                    videoImage {
                        url
                        alt
                    }
                    benefits {
                        ... on FrontPageBenefitRecord {
                            name
                            title
                            subTitle1
                            subTitle2
                        }
                    }
                    includesTitle
                    includesSubTitle
                    includes {
                        ... on FrontPageIncludeRecord {
                            text
                        }
                    }
                    feedbacks {
                        ... on FrontPageFeedbackRecord {
                            name
                            text
                            image {
                                url
                                alt
                            }
                        }
                    }
                }
            }
        `,
        props
    )

export const loadFront = async (actions, ___, { getState, getStoreState, dispatch }) => {
    const { loaded } = getState()
    if (loaded) {
        return
    }
    console.log('LOADING  FRONT')
    let { data } = await getFrontPage()
    if (data) {
        let { frontPage, frontVideo } = data

        actions.setData({ ...frontPage, frontVideo })
        actions.setLoaded(true)
    } else {
        actions.setErr('Some error has occurred')
    }
}
