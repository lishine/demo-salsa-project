// Node - Modules
import React, { useState } from 'react'
import { useActions } from 'easy-peasy'

// Common
import { Flex, Section, SvgIcon, Span, Button, Box } from 'styles/ss-components'
import { Lock } from 'common/svg/icons/index'
import { ButtonBuy } from '../ButtonBuy'

// Common

export const Task = ({ taskNumber, text, duration, key, ...props }) => {
    const openModal = useActions(actions => actions.openModal)

    return (
        <Flex
            {...props}
            key={key}
            justifyContent="space-between"
            boxShadow="inset 0 1px 0 0 #DDE0E4"
            css={{
                '&:hover': {
                    backgroundColor: '#F7F7F7',
                    button: {
                        display: 'inline-block',
                    },
                    '.duration': {
                        display: 'none',
                    },
                },
            }}
        >
            <Flex py={1}>
                <SvgIcon mr={1} width={42} transform="translateY(-2px)">
                    {taskNumber === 1 ? (
                        <Button
                            className="btn-small"
                            bg="primary"
                            onClick={() =>
                                window.scrollTo({
                                    left: 0,
                                    top: document.body.scrollHeight,
                                    behavior: 'smooth',
                                })
                            }
                        >
                            FREE
                        </Button>
                    ) : (
                        <Lock fill="var(--onwhite-muted)" />
                    )}
                </SvgIcon>
                <Span mr={2} color="onwhite-muted">
                    {`${taskNumber}`.padStart(2, '0')}.{' '}
                </Span>{' '}
                {text}{' '}
            </Flex>
            <Flex ml={2} width={50}>
                <ButtonBuy
                    my="auto"
                    display="none"
                    height={34}
                    onClick={() => openModal({ component: 'SignUp' })}
                >
                    BUY
                </ButtonBuy>
                <Box py={1} className="duration" color="onwhite-muted">
                    {duration}
                </Box>
            </Flex>
        </Flex>
    )
}
