// General packages
import React from 'react'

// General Local
import { Box, Flex, Image, P, H4 } from 'styles/ss-components'

// Specific
import { ButtonPlay } from 'common/svg/ButtonPlay'
import { Modal } from 'common/Modal'
import { Vimeo } from 'common/Vimeo'
import { usePathStore } from 'common/hooks/hooks'

export const Video = () => {
    const { coursePagePromoVideo, coursePagePromoImage } = usePathStore(
        'common',
        'data.general'
    )

    return (
        <Modal
            width={[1, 800]}
            Trigger={
                <Flex
                    cursor="pointer"
                    position="relative"
                    justifyContent="flex-start"
                    overflow="hidden"
                    borderRadius={[0, 'var(--border-radius) 0 0 var(--border-radius)']}
                    height={[240, 256, null, 240]}
                    width={[320, 356, 400, 425]}
                >
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        position="absolute"
                        height="100%"
                        // left="calc(50% - 100px)"
                        width="100%"
                        zindex="10"
                    >
                        <Flex mt={[9, 10, 10, 10]} alignItems="center" height={72}>
                            <ButtonPlay />
                        </Flex>
                        <H4 mt={1} color="light-normal">
                            COURSE OVERVIEW
                        </H4>
                    </Flex>
                    <Image
                        height="100%"
                        borderRadius={[
                            0,
                            'var(--border-radius) 0 0 var(--border-radius)',
                        ]}
                        src={coursePagePromoImage.url}
                        alt={coursePagePromoImage.alt}
                    />
                </Flex>
            }
            Content={<Vimeo link={coursePagePromoVideo.url} />}
        />
    )
}
