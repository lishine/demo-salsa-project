import micro from 'micro'
import microCors from 'micro-cors'
import { localPostRouter } from 'utils/microWrappers'
import * as routes from './routes/routesIndex'

const origin = process.env.SITE_URL
console.log('origin', origin)

const cors = microCors({
    allowHeaders: [
        'X-Requested-With',
        'Access-Control-Allow-Origin',
        'X-HTTP-Method-Override',
        'Content-Type',
        'Authorization',
        'Accept',
        'credentials',
    ],
    allowMethods: ['POST'],
    origin,
})

const server = micro(cors(localPostRouter(routes)))

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('listening on port 8080')
server.listen(8080)
