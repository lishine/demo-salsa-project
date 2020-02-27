import React from 'react'

// Common
import { Box, Flex, Image, P, H4, H3, Button, Span } from 'styles/ss-components'
import { usePathStore } from 'common/hooks/hooks'

// Local
import { Video } from './Video'
import { ButtonBuy } from '../ButtonBuy'

export const Buy = props => {
    const { promoTitle } = usePathStore('common', 'data.general')

    return (
        <Flex
            mt={2}
            position={['static', 'absolute']}
            zIndex={10}
            left={[
                null,
                'calc(50% - 356px)',
                'calc(50% - 400px)',
                'calc(100% - 425px - 115px)',
            ]}
            top={[432, -130, null, -380]}
            flexDirection={['column', 'row', 'row', 'column']}
            {...props}
        >
            <Video />

            <Flex
                bg="#F2F2F2"
                borderRadius={[0, '0 var(--border-radius) var(--border-radius) 0']}
                boxShadow="0 14px 28px -4px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.13)"
                flexDirection="column"
                alignItems="center"
                height={[240, 256, null, 336]}
                // width={[320, 361]}
                width={[320, 356, 400, 425]}
                px={3}
                pb={[4, 3]}
                pt={[4, 3, null, 5]}
            >
                <H3 width={1} className="course-buy" textAlign="center" color="#191919">
                    {promoTitle.toUpperCase()}
                </H3>
                <ButtonBuy width={1} mt={3}>
                    BUY COURSE NOW
                </ButtonBuy>
                <Span mt={2} className="small" display={['none', null, null, 'inline']}>
                    30-Day Money=Back Guarantee
                </Span>
                <Image mt={3} src="/static/img/logo-paypal.png" />
            </Flex>
        </Flex>
    )
}
