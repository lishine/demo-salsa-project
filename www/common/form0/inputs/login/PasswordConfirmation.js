import React from 'common/form0/inputs/login/react'
import Input from 'common/form0/formik/Input'

export default props => (
    <Input
        {...props}
        autoComplete="new-password"
        type="password"
        placeholder="Password confirmation"
    />
)
