// PURPOSE: apply migrations to deploy url
// 1. read migrations config yaml
// 2. read deploy json
// 3. apply graphql deploy url
// 3. apply migrations
// 3. revert config file

const read = require('read-data')
// const write = require('write-data')
const Url = require('url-parse')
const _ = require('lodash')
const execSync = require('child_process').execSync

const now = require('../now.json')
const fromUrl = new Url(now.env.DB_GRAPHQL_URL)
const HASURA_GRAPHQL_ADMIN_SECRET = new Url(now.env.HASURA_GRAPHQL_ADMIN_SECRET)

process.chdir('db/migrations')
// const docker = read.sync('docker-compose.yml')
// const admin_secret =
// docker.services['graphql-engine'].environment.HASURA_GRAPHQL_ADMIN_SECRET

// console.log('now', now)
// console.log('fromUrl', fromUrl)
// const newUrl = _.assign(
// {},
// {
// host: fromUrl.hostname,
// protocol: fromUrl.protocol,
// }
// )
// console.log('newUrl', newUrl)
// const newConfig = _.assign({}, config, {
// endpoint: newUrl.toString(),
// })

// try {
// write.sync(yamlFile, newConfig)
console.log(execSync('ls -la', { encoding: 'utf8' }))

const command = `hasura migrate apply --endpoint ${fromUrl.origin} --admin-secret ${HASURA_GRAPHQL_ADMIN_SECRET} --up all`
console.log('command', command)
console.log(execSync(command, { encoding: 'utf8' }))
// } finally {
// write.sync(yamlFile, config)
// }
