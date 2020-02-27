import React from 'react'

import FullWidthSection from './lib/FullWidthSection'
import Text from './lib/Text'
import Envelope from './lib/Envelope'

export default () => (
    <Envelope title="Contact Message">
        <FullWidthSection>
            <Text>From: [[=it.name]]</Text>
            <Text>Email: [[=it.email]]</Text>
            <Text>Message: [[=it.message]]</Text>
        </FullWidthSection>
    </Envelope>
)
