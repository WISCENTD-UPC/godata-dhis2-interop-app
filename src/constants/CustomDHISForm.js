import {
    Button,
    ButtonStrip,
    ReactFinalForm,
    composeValidators,
    hasValue,
    string,
    InputField,
} from '@dhis2/ui'
import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { PropTypes } from '@dhis2/prop-types'

import { METADATA_CONFIG_LIST_PATH } from '../views'
import {
    GODATA_OUTBREAK,
    GODATA_CASE,
    GODATA_CONTACT,
    GODATA_CONTACT_OF_CONTACT,
    GODATA_ORG_UNIT,
} from '../constants'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import 'react-responsive-modal/styles.css'
const { Field } = ReactFinalForm
import 'jsoneditor-react/es/editor.min.css'
import ReactJson from 'react-json-view'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import dot from 'dot-object'
import {
    useCreateCasesConstantMutation,
    useUpdateCasesConstantMutation,
} from '.'
import { FormRow } from '../forms'
import { PageSubHeadline } from '../headline'
import { dataTest } from '../dataTest'
import i18n from '../locales'
const { Form } = ReactFinalForm

var mappings, dhismappings

export const CustomDHISForm = () => {
    const [addCasesConstant] = useCreateCasesConstantMutation()
    //const [saveCasesConstant] = useUpdateCasesConstantMutation()
    const [model, setModel] = useState([
        {
            godataValue: [[{ conversionType: 'DHIS Custom' }]],
        },
        [
            {
                dhis: 'created',
                godata: 'createdAt',
            },
            {
                dhis: 'attributes[0].value',
                godata: 'firstName',
            },
            {
                dhis: 'orgUnit',
                godata: 'usualPlaceOfResidenceLocationId'
            },
            {
                dhis: 'geometry.coordinates[0]',
                godata: 'addresses[0].geoLocation.lat'
            },
            {
                dhis: 'geometry.coordinates[1]',
                godata: 'addresses[0].geoLocation.lng'
            }
        ],
        {
            geometry: {
                type: 'Point'
            },
            trackedEntityType: 'MCPQUTHX1Ze',
            attributes: [{ attribute: 'sB1IHYu2xQT' }],
        },
    ])

    const saveConstant = async () => {
        const nameInput = 'sample-name'
        const allValues = model
        await addCasesConstant({
            allValues,
            nameInput,
        })
        console.log('Saved')
    }
    return (
        <>
            <Editor mode="text" value={model} onChange={ev => setModel(ev)} />
            <Button primary onClick={async () => await saveConstant()}>
                Add Mapping
            </Button>
        </>
    )
}
CustomDHISForm.defaultProps = {
    initialValues: {
        parameters: [],
    },
    converterType: '',
}
