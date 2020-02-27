import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export const PayPalButton = props => {
    const [isSdkReady, setIsSdkReady] = useState(false)

    useEffect(() => {
        if (window !== undefined && window.paypal === undefined) {
            _addPaypalSdk(props.clientID, setIsSdkReady)
        }
    }, [])

    if (!isSdkReady && window.paypal === undefined) {
        return null
    }
    const Button = window.paypal.Buttons.driver('react', {
        React,
        ReactDOM,
    })

    return (
        <Button
            {...props}
            createOrder={props.createOrder}
            onApprove={(data, actions) =>
                actions.order
                    .capture()
                    .then(details => props.onSuccess(details, data))
                    .catch(err => console.log('err', err))
            }
            style={props.style || {}}
        />
    )
}

const _addPaypalSdk = (clientID, setIsSdkReady) => {
    console.log('clientID', clientID)
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}&currency=USD`
    script.async = true
    script.onload = () => {
        setIsSdkReady(true)
    }
    script.onerror = () => {
        throw new Error('Paypal SDK could not be loaded.')
    }

    document.body.appendChild(script)
}
