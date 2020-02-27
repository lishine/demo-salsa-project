import React from 'react'

import FullWidthSection from './lib/FullWidthSection'
import Text from './lib/Text'
import Envelope from './lib/Envelope'

export default () => (
    <Envelope title="Your registration and purchase confirmation">
        <FullWidthSection>
            <Text>Hi [[=it.name]]</Text>
        </FullWidthSection>
    </Envelope>
)
