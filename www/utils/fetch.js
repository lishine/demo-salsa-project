import fetch from 'isomorphic-unfetch'
import camelize from 'camelize'
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'

// Common
import { sleep, toto } from './utils'
import { globalCtx } from 'pages/_app'

export const queryDato = async (query, variables) => {
    console.log('queryDato')
    let { data, err, timeOut } = await post({
        url: `${process.env.API_URL}/api/content/dato-forward`,
        json: { query, variables },
        iWillProcess400Error: true,
    })
    console.log('data', data)
    if (data && data.data) {
        data = camelize(data.data)
        return { data }
    } else if (err || timeOut) {
        return { data, err, timeOut }
    } else if (data && data.errors) {
        console.log('data.errors', JSON.stringify(data.errors, null, 2))
        return { queryError: data.errors }
    } else if (data) {
        console.log(JSON.stringify(data, 0, 2))
        if (data.mes) {
            return { err: new Error(data.mes) }
        }
    }
    return { data, err, timeOut }
}

export const queryDb = async (query, variables) => {
    const url = process.env.DB_GRAPHQL_URL
    console.log('sending query to url', url, query, variables)

    let { data, err, timeOut } = await post({
        url: `${process.env.API_URL}/api/content/db-forward`,
        json: { query, variables },
        iWillProcess400Error: true,
    })
    console.log('{ data, err, timeOut }', { data, err, timeOut })
    if (data && data.data) {
        data = camelize(data.data)
        return { data, err, timeOut }
    } else if (err || timeOut) {
        return { err, timeOut }
    } else if (data && data.errors) {
        console.log('data.errors', JSON.stringify(data.errors, null, 2))
        return { queryError: data.errors }
    } else if (data) {
        console.log(JSON.stringify(data, 0, 2))
        if (data.mes) {
            return { err: new Error(data.mes) }
        }
    }
    return { data, err, timeOut }
}

export const useQuery = query => {
    const [data, setData] = useState(undefined)
    const [err, setErr] = useState(undefined)
    const [timeOut, setTimeOut] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data, err, timeOut } = await query()
            await sleep(1000)
            ReactDOM.unstable_batchedUpdates(() => {
                setData(data)
                setErr(err)
                setTimeOut(timeOut)
                setLoading(false)
            })
        }
        fetchData()
    }, [])
    return { data, loading, timeOut, err }
}

function setCookieFromResponse(ctx, res) {
    const cookie = res.headers.get('Set-Cookie')
    console.log('cookie', cookie)
    if (!cookie) {
        return
    }

    let cookies = []
    cookies.push(cookie)

    console.log('cookies', cookies)

    ctx.res.setHeader('Set-Cookie', cookies)
    console.log('setting ctx cookie')
}

export const post = async ({
    url,
    json,
    iWillProcess400Error,
    timeOut: _timeOut,
    headers = {},
}) => {
    console.log('url', url)
    let options = {
        method: 'POST',
        accept: '*/*',
        body: JSON.stringify(json || {}),
    }
    Object.assign(headers, { 'Content-Type': 'application/json' })

    if (!process.browser) {
        headers.cookie = globalCtx.req.headers.cookie
    } else {
        options['credentials'] = 'include'
    }
    options.headers = headers

    const { err, timeOut, data } = await toto(
        fetch(url, options)
            .then(async res => {
                if (res.ok) {
                    console.log('res.ok')
                    return res
                } else {
                    if (iWillProcess400Error) {
                        return res
                    }
                    console.log('res not ok')
                    let data
                    try {
                        data = await res.json()
                        console.log('data', data)
                    } catch (error) {
                        console.log('error', error)
                    }

                    const err = new Error(`Request rejected with, status ${res.status}`)
                    err.response = { res, data, status: res.status }
                    throw err
                }
            })
            .then(res => {
                if (globalCtx) {
                    console.log('setCookieFromResponse')
                    setCookieFromResponse(globalCtx, res)
                }
                console.log('res to json')
                return res.json()
            }),
        _timeOut || 25000
    )
    if (data) {
        // console.log(
        //     `post to ${url} with ${JSON.stringify(
        //         json,
        //         0,
        //         2
        //     )}\n success\n returning ${JSON.stringify(data, 0, 2)}`
        // )
    } else if (err) {
        console.log('post err', err.message)
    } else if (timeOut) {
        console.log('post timeOut', timeOut)
    }
    return { data, err, timeOut }
}
