import isEmpty from 'lodash/isEmpty'

// Common
import { slugifyTitleOrSlug } from 'utils/data'
import { queryDato } from 'utils/fetch'

const queryPrograms = async props => {
    const { data } = await queryDato(
        /* GraphQL */ `
            query getPrograms {
                allPrograms {
                    id
                    title
                    slug
                }
            }
        `,
        props
    )
    if (data) {
        return data.allPrograms
    }
}

export const getPrograms = async store => {
    if (isEmpty(store.getState().programs)) {
        const programs = await queryPrograms()
        console.log('programs', programs)
        programs.forEach(p => (p.slug = slugifyTitleOrSlug(p.title, p.slug)))
        store.dispatch.setPrograms(programs)
    }
}
