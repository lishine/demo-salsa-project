import path from 'path'
import kebabCase from 'lodash/fp/kebabCase'

import micro, { json, send as _send, run } from 'micro'
import { router, post, options } from 'micro-fork'

const handleError = fn => (req, res) =>
    fn(req, res).catch(err => {
        _send(res, err.status || 500, err)
    })

const convertData = fn => async (req, res) =>
    fn({ body: await json(req), host: req.headers.host, req, res })

const wrapService = fn => (req, res) => run(req, res, handleError(convertData(fn)))

const notfound = (req, res) => micro.send(res, 404, 'Not found route')
// For the cors preflight
const notfoundOptions = (req, res) => micro.send(res, 200, 'Not found route')

export const postRouter = (routesObject, dirname) => {
    console.log('dirname', dirname)

    const routes = Object.entries(routesObject).reduce((acc, [route, routeFn]) => {
        return [
            ...acc,
            post(
                path.join('/api/', path.basename(dirname), kebabCase(route)),
                wrapService(routeFn)
            ),
        ]
    }, [])
    return router()(...routes, post('/*', notfound), options('/*', notfoundOptions))
}

export const localPostRouter = routesObject => {
    const routes = Object.entries(routesObject).reduce((acc, [route, routeFn]) => {
        return [...acc, post(path.join('/api/', kebabCase(route), '/*'), routeFn)]
    }, [])
    console.log('-----------RRRREEEAAADDDYYY--------------')
    return router()(...routes, post('/*', notfound), options('/*', notfoundOptions))
}
