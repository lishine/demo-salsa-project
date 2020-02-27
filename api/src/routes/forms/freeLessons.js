// Common
import { throwError, throwIf } from 'utils/error'

// Common
import { queryDato } from 'utils/utils'

// Local
import { deliever } from 'lib/email/utils/deliever'

const getLink = async props =>
    queryDato(
        /* GraphQL */ `
            query queryCommon {
                general {
                    freeLessonLink
                    emailFreeLessonTitle
                    emailFreeLessonText
                }
            }
        `,
        props
    )

export async function freeLessons({ body, host }) {
    const { values } = body
    console.log('freeLessons body', body)

    const { name, email } = values
    throwIf(!name || !email, 400, 'No name or email')()

    const {
        general: { freeLessonLink: link, emailFreeLessonTitle, emailFreeLessonText },
    } = await getLink()

    const info = await deliever({
        name,
        email,
        subject: 'Free Lessons',
        template: 'freeLessons',
        templateParams: {
            name,
            email,
            link,
            emailFreeLessonTitle: emailFreeLessonTitle.toUpperCase(),
            emailFreeLessonText,
        },
    }).catch(throwError(400, 'Email not sent'))

    return { info }
}
