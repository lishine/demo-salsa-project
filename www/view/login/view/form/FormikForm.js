import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import { useStore, useActions } from 'easy-peasy'
import * as yup from 'yup'

import schema from './schema'
import { mapToObject } from 'utils/utils'
import { store } from 'pages/_app'

import { validate } from 'common/form0/validate'

const initialValues = fields => mapToObject(field => ({ [field]: '' }))(fields)
const schemaFunction = fields => values => {
    const sch = schema(values) // gets schema without dependency of values
    return yup.object().shape(mapToObject(field => ({ [field]: sch[field] }))(fields)) // filters only the relevant fields by form
}

const call = fn => ({ if: condition => (condition ? fn() : {}) })

export const FormikForm = ({ storePath, children, ...props }) => {
    const clearError = store.dispatch[storePath].clearError || (() => undefined)
    const setValidated = store.dispatch[storePath].setValidated || (() => undefined)
    const submit = store.dispatch[storePath].submit || (() => undefined)

    const { fields } = props
    return (
        <Formik
            isInitialValid={false}
            initialValues={initialValues(fields)}
            validate={values => {
                call(clearError).if(store.getState()[storePath].error)
                const validated = validate(schemaFunction(fields))(values)
                setValidated(validated)
                return validated
            }}
            onSubmit={(values, actions) => submit({ values, actions })}
        >
            {({ submitForm, ...props }) => {
                FormikForm[storePath] = { submitForm }
                return children({ ...props })
            }}
        </Formik>
    )
}
