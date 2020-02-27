import React from 'react'

import FullWidthSection from './lib/FullWidthSection'
import Text from './lib/Text'
import Envelope from './lib/Envelope'

export default () => (
    <Envelope title="Request for free lessons">
        <FullWidthSection>
            <Text>From: [[=it.name]]</Text>
            <Text>Email: [[=it.email]]</Text>
            <Text>What to put here?</Text>
        </FullWidthSection>
    </Envelope>
)
