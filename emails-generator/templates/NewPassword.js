import React from 'react'

import FullWidthSection from './lib/FullWidthSection'
import Text from './lib/Text'
import Envelope from './lib/Envelope'

export default () => (
    <Envelope title="PASSWORD RESET">
        <FullWidthSection>
            <Text>Hi [[=it.name]],</Text>
            <Text>
                We have received a request to change password for the Paradiso Academy
                account: [[=it.email]]
            </Text>
            <Text>
                <button href="[[=it.link]]">PASSWORD RESET</button>
            </Text>
        </FullWidthSection>
    </Envelope>
)
