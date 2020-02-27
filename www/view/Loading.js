import React from 'react'
import { useStore } from 'easy-peasy'
import { LoadingIndicator } from 'utils/utils'

import { Flex } from 'styles/ss-components'

export const Loading = ({ children }) => {
    const loading = useStore(state => state.loading)
    const err = useStore(state => state.err)

    if (!loading && !err) {
        return <>{children}</>
    }
    return (
        <Flex flex={1} alignItems="center" justifyContent="center">
            {err || <LoadingIndicator loading />}
        </Flex>
    )
}
