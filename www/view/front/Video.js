// General packages
import React from 'react'

// General Local
import { Box, Flex, Card, Image, P, H4, Span } from 'styles/ss-components'
import { Row, Col } from 'styles/grid'

// Specific
import { ButtonPlay } from 'common/svg/ButtonPlay'
import { Modal } from 'common/Modal'
import { Vimeo } from 'common/Vimeo'
import { sentences, words } from 'utils/utils'

export const Video = ({ data }) => {
    const { videoText, video, videoImage } = data
    return (
        <Row pt={[3, 3, 10, 10]} pb={[6, 10, 11, 11]}>
            <Col cols={[12, 4, 5, 4]}>
                <Modal
                    className="grid-container"
                    width={[1, 800]}
                    Trigger={
                        <Flex
                            cursor="pointer"
                            position="relative"
                            borderRadius={1}
                            justifyContent="center"
                            overflow="hidden"
                        >
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                                position="absolute"
                                zindex="10"
                            >
                                <Flex
                                    mt={[5, 10, 10, 10]}
                                    alignItems="center"
                                    height={72}
                                >
                                    <ButtonPlay />
                                </Flex>
                                <H4 mt={1} color="light-normal">
                                    VIDEO OVERVIEW
                                </H4>
                            </Flex>
                            <Image
                                height={[192, 264, 264, 264]}
                                borderRadius={1}
                                src={videoImage.url}
                                alt={videoImage.alt}
                            />
                        </Flex>
                    }
                    Content={<Vimeo link={video.url} />}
                />
            </Col>
            <Col cols={[0, 1, 1, 1]} />
            <Col cols={[12, 7, 6, 6]}>
                <P pt={[3, 1, 2, 2]} color="onwhite-normal">
                    <strong>{words(sentences(videoText, 0, -2), 0, 2)} </strong>
                    {words(sentences(videoText, 0, -2), 2)}
                    <Span display={['none', 'none', 'none', 'block']}>
                        <br />
                        <strong>{words(sentences(videoText, -2), 0, 2)} </strong>
                        {words(sentences(videoText, -2), 2)}
                    </Span>
                </P>
            </Col>
            <Col cols={[0, 0, 0, 1]} />
        </Row>
    )
}
