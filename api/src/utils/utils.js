import get from 'lodash/fp/get'
import fetch from 'isomorphic-unfetch'
import camelize from 'camelize'
import { default as fpFind } from 'lodash/fp/find'

export const find = fpFind.convert({ cap: false })

export const queryDato = (query, variables) => {
    const url = process.env.DATO_GRAPHQL_URL
    console.log('sending query to url', url, query, variables)

    return post(
        url,
        { query, variables },
        {
            Authorization: process.env.DATO_API_TOKEN,
        }
    ).then(d => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('d', JSON.stringify(d))
        }
        if (!d.data) {
            const firstError = d.errors[0]
            const { message } = firstError
            console.log('data.errors', JSON.stringify(d.errors, null, 2))
            const { code } = firstError.extensions
            const error = Error()
            error.message = message
            error.code = code
            error.query = query
            error.vars = variables
            error.errorArray = d.errors
            throw error
        }
        return camelize(d.data)
    })
}

export const queryDb = (query, variables) => {
    const url = process.env.DB_GRAPHQL_URL
    console.log('sending query to url', url, query, variables)

    return post(
        url,
        { query, variables },
        { 'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET }
    ).then(d => {
        console.log('d', JSON.stringify(d))
        if (!d.data) {
            const firstError = d.errors[0]
            const { message } = firstError
            console.log('d.errors', d.errors)
            const { code } = firstError.extensions
            const error = Error()
            error.message = message
            error.code = code
            error.query = query
            error.vars = variables
            error.errorArray = d.errors
            throw error
        }
        return camelize(d.data)
    })
}

export const post = (url, json, headers) =>
    fetch(url, {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(json),
    }).then(response => response.json())

export const toto = (p, t) => {
    const promise = get('promise')(p) || p
    const timeOut = get('timeOut')(p) || t
    return timeOutPromise({ promise, timeOut })
        .then(data => ({ data }))
        .catch(err => {
            if (err.message === 'timeOut') {
                return { timeOut: true }
            } else {
                return { err }
            }
        })
}

function timeOutPromise({ timeOut, promise }) {
    let handle
    if (!timeOut) {
        return promise
    }

    return Promise.race([
        promise,
        new Promise((resolve, reject) => {
            handle = setTimeout(() => {
                reject(new Error('timeOut'))
            }, timeOut)
        }),
    ]).then(
        v => {
            clearTimeout(handle)
            return v
        },
        err => {
            clearTimeout(handle)
            throw err
        }
    )
}

export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
