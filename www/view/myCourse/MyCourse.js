// Node - Modules
import React, { useState, useEffect } from 'react'
import { LoadingIndicator, Map } from 'utils/utils'

// Common
import {
    P,
    Box,
    Flex,
    H1,
    H4,
    UL,
    LI,
    Section,
    OL,
    DT,
    DD,
    DL,
} from 'styles/ss-components'
import { Vimeo } from 'common/Vimeo'

import { usePathStore, usePathActions } from 'common/hooks/hooks'

// Local
import { Menu } from './Menu'

export const path = 'myCourse'

export const MyCourse = () => {
    const programData = usePathStore('common', 'data.program')

    const loading = usePathStore(path, 'loading')
    const err = usePathStore(path, 'err')
    const page = usePathStore(path, 'page')

    const firstLoad = usePathActions(path, 'firstLoad')
    useEffect(() => {
        firstLoad()
    }, [])

    return (
        <Flex
            pb={10}
            pt={8}
            flexDirection={['column', 'column', 'row']}
            className="grid-container padding-container"
        >
            <Menu
                display={['block', 'none', 'block']}
                flex={[1, 2 / 12, 4 / 12, 3 / 12]}
            />

            <Box
                display={['none', 'none', 'none', 'block']}
                flex={[null, null, null, 1 / 12]}
            />

            <Box flex={[1, 10 / 12, 8 / 12]} pl={[0, 0, 4]}>
                <Flex flexDirection={['column', 'row']}>
                    <Menu display={['none', 'block', 'none']} flex={2 / 12} />

                    <Box pl={[0, 4, 0]} flex={[1, 10 / 12, 1]}>
                        <H1 className="my-course-title">
                            {programData.title.toUpperCase()}
                        </H1>
                        <LoadingIndicator loading={loading}>
                            {page && <H4 mt={2}>{page.title}</H4>}
                        </LoadingIndicator>
                    </Box>
                </Flex>

                {err && (
                    <Flex py={4} justifyContent="center" fontSize={25}>
                        {err.message}
                    </Flex>
                )}

                {page && (
                    <>
                        <Section mt={4} pt={2} className="minus-margin-container-down-sm">
                            <Vimeo link={page.video.url} />
                        </Section>
                        <Section mt={6}>{page.paragraphA}</Section>
                        <UL>
                            <Map collection={page.list}>
                                {li => <LI textIndent={false}>{li}</LI>}
                            </Map>
                        </UL>
                        <OL mt={2}>
                            <Map collection={page.numberedList}>
                                {({ title, subTitle, subList }, index) => (
                                    <DL
                                        display={[null, null, 'flex']}
                                        px={2}
                                        pt={1}
                                        pb={2}
                                        bg={index % 2 ? 'light-normal' : '#EFF2F6'}
                                    >
                                        <Section flex={1}>
                                            <DT>
                                                <strong>{`${index +
                                                    1}. ${title}`}</strong>
                                            </DT>
                                            <DD>{subTitle}</DD>
                                        </Section>
                                        <UL flex={1}>
                                            <Map collection={subList}>
                                                {li => <LI>{li}</LI>}
                                            </Map>
                                        </UL>
                                    </DL>
                                )}
                            </Map>
                        </OL>
                        <P mt={4}>{page.paragraphB}</P>
                    </>
                )}
            </Box>
        </Flex>
    )
}
