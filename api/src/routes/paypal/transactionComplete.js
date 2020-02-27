import checkoutNodeJssdk from '@paypal/checkout-server-sdk'

import { throwIf, throwError } from 'utils/error'

import { client } from './common/utils'

export const transactionComplete = async ({ body }) => {
    const { orderID } = body

    console.log('orderID', orderID)

    const request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID)

    // 'sandbox' or 'production'
    const order = await client('production').execute(request)
    const value = order.result.purchase_units[0].amount.value

    console.log('order', order)
    console.log('value', value)
    throwIf(value !== '0.01')()

    return { ok: true }
}
