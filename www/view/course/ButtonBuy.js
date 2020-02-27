// General packages
import React, { useEffect } from 'react'
import { useActions } from 'easy-peasy'

// General Local
import { Button } from 'styles/ss-components'

export const ButtonBuy = props => {
    const openModal = useActions(actions => actions.openModal)

    return (
        <Button
            onClick={() => openModal({ component: 'SignUp' })}
            className="btn btn-primary"
            {...props}
        />
    )
}
