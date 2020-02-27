import { listen, action, thunk } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

// Common
import { queryDato } from 'utils/fetch'
import { loadModel } from 'common/models/loadModel'
import { convertList } from 'utils/utils'

const getCommon = async props =>
    queryDato(
        /* GraphQL */ `
            query queryCommon {
                _site {
                    faviconMetaTags {
                        tag
                        attributes
                    }
                }
                general {
                    title
                    titleSuffix
                    description
                    facebookLink
                    twitterLink
                    youtubeLink
                    promoTitle
                    promoDate
                    coursePagePromoVideo {
                        url
                    }
                    coursePagePromoImage {
                        url
                        alt
                    }
                    aboutPagePromoImage {
                        url
                        alt
                    }
                    instructorsImage {
                        url
                        alt
                    }
                    instructors {
                        ... on GeneralInstructorRecord {
                            name
                            roles
                            image {
                                url
                                alt
                            }
                        }
                    }
                    thankYouImage {
                        url
                        alt
                    }
                    loginImage {
                        url
                        alt
                    }
                    signupImage {
                        url
                        alt
                    }
                }
                allProgramAs {
                    id
                    title
                    price
                    regularPrice
                    discount
                    fullCourseName
                    menu {
                        ... on ProgramAMenuBeforeLinkRecord {
                            _modelApiKey
                            text
                            page {
                                id
                            }
                        }
                        ... on ProgramAMenuTaskRecord {
                            _modelApiKey
                            text
                            weekNumber
                            taskNumber
                            duration
                            page {
                                id
                            }
                        }
                        ... on ProgramAMenuAfterLinkRecord {
                            _modelApiKey
                            text
                            page {
                                id
                            }
                        }
                    }
                }
            }
        `,
        props
    )

const convertDuration = durationFromCms => {
    const [hours, minutes] = durationFromCms.split(':')
    const totalMinutes = hours * 60 + 1 * minutes
    const convertedDuration = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`
    return { convertedDuration, minutes: totalMinutes }
}

const convertMenu = menu => {
    const before = []
    const weeks = []
    const after = []
    let numberOfTasks = 0
    let totalMinutes = 0
    menu.forEach(record => {
        const { ModelApiKey } = record
        if (ModelApiKey === 'program_a_menu_before_link') {
            const {
                page: { id: pageId },
                ..._record
            } = record
            before.push({ pageId, ..._record })
        } else if (ModelApiKey === 'program_a_menu_task') {
            const {
                weekNumber,
                duration,
                page: { id: pageId },
                ..._record
            } = record
            weeks[weekNumber - 1] = weeks[weekNumber - 1] || []
            const { convertedDuration, minutes } = convertDuration(duration)
            weeks[weekNumber - 1].push({
                pageId,
                duration: convertedDuration,
                ..._record,
            })
            numberOfTasks += 1
            totalMinutes += minutes
        } else if (ModelApiKey === 'program_a_menu_after_link') {
            const {
                page: { id: pageId },
                ..._record
            } = record
            after.push({ pageId, ..._record })
        }
    })

    const totalHours = `${Math.floor(totalMinutes / 60)}`
    totalMinutes = `${totalMinutes % 60}`
    const totalDuration = `${totalHours.padStart(2, '0')}:${totalMinutes.padStart(
        2,
        '0'
    )}`
    return { numberOfTasks, totalDuration, menu: { before, weeks, after } }
}

export const loadCommon = async (actions, ___, { getState }) => {
    if (getState().loaded) {
        return
    }
    actions.setLoading(true)
    let { data, err, timeOut } = await getCommon()
    if (data) {
        let { menu, ...program } = data.allProgramAs[0]

        data.general.favicon = {}
        data.general.favicon.url = data.Site.faviconMetaTags[1].attributes.href

        data.general.instructors = data.general.instructors.map(
            ({ roles, ...instructor }) => ({
                roles: convertList(roles),
                ...instructor,
            })
        )

        data = {
            general: data.general,
            program: { ...convertMenu(menu), ...program },
        }
    }

    actions.setData(data)
    actions.setErr(err)
    actions.setTimeOut(timeOut)
    actions.setLoading(false)
    actions.setLoaded(true)
}
