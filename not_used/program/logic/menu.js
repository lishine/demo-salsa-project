import { getPrograms } from 'view/program/logic/programs'
import upperFirst from 'lodash/upperFirst'

import { queryDato } from 'utils/fetch'

const queryTypes = async props => {
    const { data } = await queryDato(
        /* GraphQL */ `
            query IntrospectionQuery {
                __schema {
                    types {
                        ...FullType
                    }
                }
            }

            fragment FullType on __Type {
                kind
                name
                fields {
                    name
                    type {
                        ...TypeRef
                    }
                }
                possibleTypes {
                    ...TypeRef
                }
            }

            fragment TypeRef on __Type {
                kind
                name
                ofType {
                    kind
                    name
                }
            }
        `,
        props
    )
    return data._schema.types
}
const findCollectionTypes = (types, collection) =>
    types.find(type => type.name === `${upperFirst(collection)}Record`)

const getMcs = (types, collectionType, regex) => {
    let foundMcs = collectionType.fields.filter(field => field && field.name.match(regex))
    console.log('1 foundMcs: ', JSON.stringify(foundMcs, null, 2))

    return foundMcs.map(foundMc => {
        const mc = { name: foundMc.name }
        if (foundMc.type.ofType.kind === 'UNION') {
            mc.subMenu = true
            mc.mbs = types
                .find(({ name }) => name === foundMc.type.ofType.name)
                .possibleTypes.map(({ name }) => name)
        } else {
            mc.subMenu = false
            mc.mbs = [foundMc.type.ofType.name]
        }
        console.log('mc', mc)
        return mc
    })
}

const buildMcsQuery = mcs => {
    console.log('((((((((((((((((((((((((((((((((((((mcs', mcs)
    let mbsQueries = ''
    mcs.forEach(ct => {
        let mcBlocks = ''

        ct.mbs.forEach(cb => {
            mcBlocks = `
			${mcBlocks}
				... on ${cb} {
					id
					title
					slug
				}`
        })
        mbsQueries = `
		${mbsQueries}
			${ct.name} {
				__typename
				${mcBlocks}
			}`
        console.log('6 ctBlocks', mcBlocks)
    })
    return mbsQueries
}

const queryMenu = async props => {
    const types = await queryTypes()
    const programType = findCollectionTypes(types, 'program')
    const weekType = findCollectionTypes(types, 'week')

    const q = /* GraphQL */ `
			query getMenu($id: ItemId!) {
				program(filter: { id: { eq: $id } }) {
					${buildMcsQuery(getMcs(types, programType, /^before\d*$/))}
					weeks {
						title
						id
						slug
						${buildMcsQuery(getMcs(types, weekType, /^before\d*$/))}
						days {
							id
							slug
							title
						}
						${buildMcsQuery(getMcs(types, weekType, /^after\d*$/))}
					}
					${buildMcsQuery(getMcs(types, programType, /^after\d*$/))}
				}
			}
		`

    return queryDato(q, props)
        .then(d => d.program)
        .catch(err => console.log('Error quering content', err))
}

export const loadMenu = async (store, slug) => {
    await getPrograms(store)

    const { programs } = store.getState()
    const { id } = programs[0]

    let menu = store.getState().program.menus[id]
    if (!menu) {
        menu = await queryMenu({ id })
        store.dispatch.program.addMenu({ id, menu })
    }
    return menu
}
