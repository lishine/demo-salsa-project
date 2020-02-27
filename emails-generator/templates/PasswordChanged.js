import React from 'react'

import FullWidthSection from './lib/FullWidthSection'
import Text from './lib/Text'
import Envelope from './lib/Envelope'

export default () => (
    <Envelope title="You password has been reset">
        <FullWidthSection>
            <Text>We've reset your password succesfully </Text>
        </FullWidthSection>
    </Envelope>
)
