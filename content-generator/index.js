import { SiteClient } from 'datocms-client'

const client = new SiteClient('6e1431dcf2fa568655cba01e637387')

const generateModels = async () => {
	console.log('*')
	let site
	site = await client.itemTypes.find(54923)
	console.log(site)
	const { fields } = site
	let i = 0
	for (let f of fields) {
		const field = await client.fields.find(f)
		console.log(i++, 'field', f, field)
	}
	// site = await client.fields.find(211688)
	// console.log(site)
	// site = await client.fields.find(211704)
	// console.log(site)
	// [ '211752', '211688', '211704', '211753' ]
	// const site = await client.itemTypes.update('57989', {
	// 	allLocalesRequired: false,
	// 	apiKey: 'aa',
	// 	collectionAppeareance: 'compact',
	// 	draftModeActive: false,
	// 	hasSingletonItem: true,
	// 	modularBlock: false,
	// 	name: 'aa',
	// 	orderingDirection: null,
	// 	singleton: false,
	// 	sortable: true,
	// 	tree: false,
	// 	orderingField: null,
	// 	// fields: [ '223023' ],
	// 	titleField: '223023',
	// })

	console.log('**')
}

async function execute() {
	try {
		await generateModels()
	} catch (error) {
		console.log(error)
	}
}

execute()
