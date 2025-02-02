import { SingleSelectField, SingleSelectOption, NoticeBox, CenteredContent, CircularLoader } from '@dhis2/ui'
import { useHistory, useParams } from 'react-router-dom'
import React, { useState } from 'react'

import { METADATA_CONFIG_LIST_PATH } from './MetadataConfigList'
import { GODATA_OUTBREAK, GODATA_CASE, GODATA_CONTACT, GODATA_CONTACT_OF_CONTACT, 
    GODATA_ORG_UNIT } from '../../constants'
import { FormRow } from '../../forms'
import { PageHeadline } from '../../headline'
import { dataTest } from '../../dataTest'
import {
    LocationsForm,
    CasesForm,
    ContactsForm,
    ContactsOfContactForm,
    OutbreaksForm,
    useReadMappingConfigConstantsQueryById,
} from '../../constants'
import i18n from '../../locales'
import styles from './MetadataConfigFormEdit.module.css'

export const METADATA_CONFIG_FORM_EDIT_PATH_STATIC = '/metadata/edit'
export const METADATA_CONFIG_FORM_EDIT_PATH = `${METADATA_CONFIG_FORM_EDIT_PATH_STATIC}/:id`


const getInitialValues = jsonData => {
    return jsonData.constant
}

    const getFormComponent = selectedForm => {
        if (GODATA_OUTBREAK === selectedForm) {
            return OutbreaksForm
        }
    
        if (GODATA_CASE === selectedForm) {
            return CasesForm
        }
    
        if (GODATA_CONTACT === selectedForm) {
            return ContactsForm
        }
            
        if (GODATA_CONTACT_OF_CONTACT === selectedForm) {
            return ContactsOfContactForm
        }
            
        if (GODATA_ORG_UNIT === selectedForm) {
            return LocationsForm
        }

        if (selectedForm === "DHIS Custom") {
            return CasesForm
        }
        throw new Error(`The conversion type does not exist, got "${selectedForm}"`)
    }


export const MetadataConfigFormEdit = () => {
    const history = useHistory()
    const { id } = useParams()
    const [visibleForm, setVisibleForm] = useState()
    const [showCancelDialog, setShowCancelDialog] = useState(false)
    const onCancel = pristine =>
        pristine ? history.goBack() : setShowCancelDialog(true)

    const { loading, error: loadError, data: jsonData } = useReadMappingConfigConstantsQueryById(
        id
    )
    //console.log('jsonData ' + JSON.stringify(jsonData?.constant?.description))
    const conversionType =
    jsonData
        ? JSON.parse(jsonData.constant.description)[0].godataValue[0][0].conversionType
        : {}
    
    if (loading) {
        return (
            <>
                <PageHeadline>{i18n.t('Edit')}</PageHeadline>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </>
        )
    }

    if (loadError) {
        const msg = i18n.t('Something went wrong whilst loading constants')

        return (
            <>
                <PageHeadline>{i18n.t('Edit')}</PageHeadline>
                <NoticeBox error title={msg}>
                    {loadError.message}
                </NoticeBox>
            </>
        )
    }

    const onSubmit = async values => {
        try {
            history.push(METADATA_CONFIG_LIST_PATH)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const onCancelClick = () => history.push(METADATA_CONFIG_LIST_PATH)

//console.log(JSON.parse(jsonData.constant.description)[0][0].conversionType)

    const FormComponent = getFormComponent(conversionType)
    const initialValues = conversionType && getInitialValues(jsonData)

    return (
        <div
            data-test={dataTest('views-constantconfigformnew')}
            className={styles.container}
        >
            <PageHeadline>{i18n.t('Add mappings')}</PageHeadline>

            <FormRow>
                {visibleForm === GODATA_OUTBREAK && (
                    <OutbreaksForm
                        onSubmit={onSubmit}
                        onCancelClick={onCancelClick}
                    />
                )}

                {visibleForm === GODATA_CASE && (
                    <CasesForm
                        onSubmit={onSubmit}
                        passwordRequired={true}
                        onCancelClick={onCancelClick}
                    />
                )}

                {visibleForm === GODATA_CONTACT && (
                    <ContactsForm
                        onSubmit={onSubmit}
                        passwordRequired={true}
                        onCancelClick={onCancelClick}
                    />
                )}
                
                {visibleForm === GODATA_CONTACT_OF_CONTACT && (
                    <ContactsOfContactForm
                        onSubmit={onSubmit}
                        passwordRequired={true}
                        onCancelClick={onCancelClick}
                    />
                )}
                
                {visibleForm === GODATA_ORG_UNIT && (
                    <LocationsForm
                        onSubmit={onSubmit}
                        passwordRequired={true}
                        onCancelClick={onCancelClick}
                    />
                )}
            </FormRow>
            <FormComponent
                        initialValues={initialValues}
                        converterType={visibleForm}
                        onSubmit={onSubmit}
                        onCancelClick={pristine =>
                            pristine
                                ? history.push(METADATA_CONFIG_LIST_PATH)
                                : setShowCancelDialog(true)
                        }
                    />
        </div>
    )
}
