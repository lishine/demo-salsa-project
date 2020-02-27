import * as React from 'react'
import CannerScript, { Body } from 'canner-script'
import Profile from './schema/profile.schema'
import ItemBody from './components/layouts/Body'
import { LocalStorageConnector, PrismaClient } from 'canner-graphql-interface'
// import data from './data.json'

const graphqlClient = new PrismaClient()

const schema = (
	<root imageStorage graphqlClient={graphqlClient}>
		<Body component={ItemBody}>
			<Profile />
		</Body>
	</root>
)

// const connector = new LocalStorageConnector({
// 	schema: schema.schema,
// 	defaultData: data,
// 	localStorageKey: '03profile',
// })
// schema.connector = connector

export default schema
