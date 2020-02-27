// Node - modules
import React from 'react'
import { getIn } from 'formik'

// Common
import { Span, Box } from 'styles/ss-components'

export const MapFormikProps = ({
    field: { value, ...field },
    form,
    label,
    children,
    className,
    ...props
}) => {
    const { name } = field

    const touched = getIn(form.touched, name)
    const error = form.errors[name]

    let status = 'normal'
    if (touched && error) {
        status = 'error'
    } else if (touched && !error) {
        status = 'valid'
    }
    return (
        <div className={className}>
            <Box mb={1}>{label}</Box>
            {children({
                status,
                error,
                field: {
                    ...props,
                    value: value || '', // Because of warning - changing controlled input from uncontrolled
                    ...field,
                },
            })}
        </div>
    )
}
