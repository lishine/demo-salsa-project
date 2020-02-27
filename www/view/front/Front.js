import React, { useEffect } from 'react'

// Common
import { P, Box, Flex, H1, H4, Span, H3 } from 'styles/ss-components'
import { usePathStore, usePathActions } from 'common/hooks/hooks'
import { Loading } from 'view/Loading'

// Local
import { Hero } from 'view/front/Hero'
import { Benefits } from 'view/front/Benefits'
import { Video } from 'view/front/Video'
import { Includes } from 'view/front/Includes'
import { Instructors } from 'view/front/Instructors'
import { Feedbacks } from 'view/front/Feedbacks'

const path = 'front'

export const Front = () => {
    const loadFront = usePathActions(path, 'loadFront')

    const data = usePathStore(path, 'data')
    const err = usePathStore(path, 'err')
    const loaded = usePathStore(path, 'loaded')
    useEffect(() => {
        loadFront()
    }, [])

    if (!loaded || err) {
        return (
            <Flex flex={1} alignItems="center" justifyContent="center">
                {err || <Loading loading />}
            </Flex>
        )
    }

    return (
        <>
            <Hero data={data} />
            <Box mb={[1, 4, 11]} className="grid-container">
                <div className="padding-container">
                    <Video data={data} />
                </div>
                <div className="padding-container-md">
                    <Benefits data={data} />
                </div>
                <div className="padding-container">
                    <Includes data={data} />
                </div>
                <div className="padding-container-md">
                    <Instructors />
                </div>
                <div className="padding-container">
                    <Feedbacks data={data} />
                </div>
            </Box>
        </>
    )
}
