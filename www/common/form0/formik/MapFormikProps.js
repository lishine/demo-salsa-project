// Node - modules
import React from 'react'
import { getIn } from 'formik'

export const MapFormikProps = ({
    field: { value, ...field },
    form,
    children,
    className,
    ...props
}) => {
    const { name } = field

    const touched = getIn(form.touched, name)
    const error = form.errors[name]
    console.log('name', name)
    console.log('touched', touched)
    console.log('error', error)

    let status = 'normal'
    if (touched && error) {
        status = 'error'
    } else if (touched && !error) {
        status = 'valid'
    }
    return (
        <div className={className}>
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
