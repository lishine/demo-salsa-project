import paypal from '@paypal/checkout-server-sdk'

export const getOrder = async orderId => {
    const request = new paypal.orders.OrdersGetRequest(orderId)
    const order = await client('sandbox').execute(request)
    const value = order.result.purchase_units[0].amount.value

    console.log('order', order)
    console.log('value', value)
}

function sandboxEnvironment() {
    let clientId = process.env.PAYPAL_SANDBOX_CLIENT_ID
    let clientSecret = process.env.PAYPAL_SANDBOX_CLIENT_SECRET

    return new paypal.core.SandboxEnvironment(clientId, clientSecret)
}

function productionEnvironment() {
    let clientId = process.env.PAYPAL_CLIENT_ID
    let clientSecret = process.env.PAYPAL_CLIENT_SECRET
    console.log('clientId', clientId)
    console.log('clientSecret', clientSecret)
    return new paypal.core.LiveEnvironment(clientId, clientSecret)
}

function client(whichEnv) {
    const env = whichEnv === 'production' ? productionEnvironment() : sandboxEnvironment()
    return new paypal.core.PayPalHttpClient(env)
}

/**
 *
 * Set up and return PayPal JavaScript SDK environment with PayPal access credentials.
 * This sample uses SandboxEnvironment. In production, use ProductionEnvironment.
 *
 */

export async function prettyPrint(jsonData, pre = '') {
    let pretty = ''
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
    for (let key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            if (isNaN(key)) {
                pretty += pre + capitalize(key) + ': '
            } else {
                pretty += pre + (parseInt(key) + 1) + ': '
            }
            if (typeof jsonData[key] === 'object') {
                pretty += '\n'
                pretty += await prettyPrint(jsonData[key], pre + '    ')
            } else {
                pretty += jsonData[key] + '\n'
            }
        }
    }
    return pretty
}
