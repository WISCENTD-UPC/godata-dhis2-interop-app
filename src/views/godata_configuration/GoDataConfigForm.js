import { CenteredContent, CircularLoader, NoticeBox } from '@dhis2/ui'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'

import { HOME_PATH } from '..'

import { FormRow } from '../../forms'
import { PageHeadline } from '../../headline'
import { dataTest } from '../../dataTest'
import {
    GoDataServerConfigForm,
    useCreateGoDataServerConfigConstantMutation,
    useReadGoDataServerConfigConstantQueryByCode,
    useUpdateGoDataServerConfigConstantMutation,
} from '../../constants'
import i18n from '../../locales'
import styles from './GoDataConfigForm.module.css'

export const GODATA_CONFIG_FORM_PATH = '/godata-config'
export const GODATA_CONFIG_FORM_LABEL = 'Go.Data configuration'

export const GoDataConfigForm = () => {
    const history = useHistory()
    const { code } = 'godataserverconf'

    const { loading, error: loadError, data: jsonData } = useReadGoDataServerConfigConstantQueryByCode(
        code
    )

    var exists = false

    const data = 

    jsonData && jsonData.constant.constants.length >0
    ? JSON.parse(jsonData.constant.constants[0].description)
            : {}

    const initialValues = data

    const [
        saveGoDataServerConfigConstant,
        { saveError: saveGoDataServerConfigConstantError },
    ] = useCreateGoDataServerConfigConstantMutation()

    const saveError = saveGoDataServerConfigConstantError 

    const [
        updateGoDataServerConfigConstant,
        { updateError: updateGoDataServerConfigConstantError },
    ] = useUpdateGoDataServerConfigConstantMutation()

    const updateError = updateGoDataServerConfigConstantError

    if (saveError) {
        const msg = i18n.t('Something went wrong whilst saving server configs')

        return (
            <div data-test={dataTest('views-gatewayconfigformnew')}>
                <PageHeadline>{i18n.t('Edit Server Config')}</PageHeadline>
                <NoticeBox error title={msg}>
                    {error.message}
                </NoticeBox>
            </div>
        )
    }
        
    if (updateError) {
        const msg = i18n.t('Something went wrong whilst saving server configs')

        return (
            <div data-test={dataTest('views-gatewayconfigformnew')}>
                <PageHeadline>{i18n.t('Edit Server Config')}</PageHeadline>
                <NoticeBox error title={msg}>
                    {error.message}
                </NoticeBox>
            </div>
        )
    }

    const onSubmit = async values => {
        try {

            if(exists){
                values.id=jsonData.constant.constants[0].id
                await updateGoDataServerConfigConstant(values)
            }else{
                await saveGoDataServerConfigConstant(values)
            }
            
            history.push(HOME_PATH)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const onCancelClick = () => history.push(HOME_PATH)

    return (
        <div
            data-test={dataTest('views-gatewayconfigformnew')}
            className={styles.container}
        >
            <PageHeadline>{i18n.t('Configure Go.Data server')}</PageHeadline>

            <FormRow>

                    <GoDataServerConfigForm
                    initialValues={initialValues}
                        onSubmit={onSubmit}
                        passwordRequired={true}
                        onCancelClick={onCancelClick}
                    />

            </FormRow>

        </div>
    )
}
