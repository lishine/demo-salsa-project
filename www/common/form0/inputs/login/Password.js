import React from 'common/form0/inputs/login/react'
import Input from 'common/form0/formik/Input'

export default ({ placeholder, ...props }) => (
    <Input
        {...props}
        placeholder={placeholder}
        autoComplete="new-password"
        type="password"
    />
)
