import React, { memo, useState, useEffect, useRef } from 'react'
import { Formik } from 'formik'
import { useActions, useStore } from 'easy-peasy'
import get from 'lodash/fp/get'
import set from 'lodash/fp/set'
// import isEqual from 'lodash/isEqual'
import useDeepCompareEffect from 'use-deep-compare-effect'

// Common
import { validate } from './validate'
import { pickSchema } from './schema'
import { store } from 'pages/_app'
import { pick } from 'utils/utils'

export const FForm = memo(({ path, index, children, initialValues, fields, reset }) => {
    const submit = useActions(actions => get(path)(actions).submit)
    const onNewValues = useActions(actions => get(path)(actions).onNewValues)
    const clearError = useActions(actions => get(path)(actions).clearError)
    fields = fields || initialValues

    const [state, setState] = useState(undefined)
    useDeepCompareEffect(() => {
        const values = get(path)(store.getState()).values
        setState({
            initialValues: reset
                ? initialValues
                : Object.assign({}, initialValues, pick(Object.keys(fields))(values)),
        })

        clearError({ index })
    }, [initialValues])

    return !state ? null : (
        <Formik
            enableReinitialize
            initialValues={state.initialValues}
            validate={values => {
                const validated = validate(pickSchema(fields))(values)
                onNewValues({ values, validated, index })
                return validated
            }}
            onSubmit={() => submit({ index })}
        >
            {({ submitForm, handleSubmit, ...props }) => {
                set(path)({ submitForm })(FForm)

                const _submit = fromForm => {
                    submit({ index, fromForm })
                }

                return children({ handleSubmit, submit: _submit, ...props })
            }}
        </Formik>
    )
})

// FForm.whyDidYouRender = true
