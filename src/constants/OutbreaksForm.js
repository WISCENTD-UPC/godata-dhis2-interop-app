import { Button, ButtonStrip, ReactFinalForm, CircularLoader } from '@dhis2/ui'
import React from 'react'
import { PropTypes } from '@dhis2/prop-types'
import {useReadMappingConfigConstantsQueryForConfig} from '.'

import axios from 'axios'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

import {
    FieldConstantName,
} from '.'
import { FormRow } from '../forms'
import { PageSubHeadline } from '../headline'
import { dataTest } from '../dataTest'
import i18n from '../locales'

const { Form } = ReactFinalForm

var metaObjects;

export const OutbreaksForm = ({
    onCancelClick,
    onSubmit,
    initialValues,
}) => {
    
       //  console.log('data ' + data)
       const { code } = 'godataserverconf'

       const { loading, error: loadError, data: jsonData } = useReadMappingConfigConstantsQueryForConfig(
           code
       )

       const data = 

       jsonData && jsonData.constants.constants.length >0
       ? JSON.parse(jsonData.constants.constants[0].description)
               : {}

    const submitText = initialValues
        ? i18n.t('Save mappings')
        : i18n.t('Add mappings')

        const { loginLoading, loginError: loginLoadError, data: loginResponse } = 
        axios
        .post(data.urlTemplate+"/api/users/login", {
          email: data.username,
          password: data.password,
        }
        )
        .then(response => {
            //https://godata-r5.who.int
          //const data = response.data.results;
          //this.setState({ data });
          axios
          .get(data.urlTemplate+"/api/outbreaks", {
            headers : {
                Authorization: response.data.id,
              }
          }, 
          
          ).then(response => {
           // Editor.set(response.data)  
            //  console.log(response.data)
              metaObjects=response.data[0]
          })
        })
        .catch(error => {
          console.log(error);
        });
 


        if (loginLoading) {
            return (
                <>
                    <PageHeadline>{i18n.t('Add New')}</PageHeadline>
                    <CenteredContent>
                        <CircularLoader />
                    </CenteredContent>
                </>
            )
        }
    
        if (loginLoadError) {
            const msg = i18n.t('Something went wrong whilst loading gateways')
    
            return (
                <>
                    <PageHeadline>{i18n.t('Edit')}</PageHeadline>
                    <NoticeBox error title={msg}>
                        {loadError.message}
                    </NoticeBox>
                </>
            )
        }

        const handleChange = () => console.log('jsontreechanges')        

    return (
        <Form
            keepDirtyOnReinitialize
            onSubmit={onSubmit}
            initialValues={initialValues}
        >
            {({ handleSubmit, values, submitting, pristine }) => (
                <form
                    onSubmit={handleSubmit}
                    data-test={dataTest('gateways-gatewaygenericform')}
                >
                    <PageSubHeadline>{i18n.t('Mappings setup')}</PageSubHeadline>

                    <FormRow>
                        <FieldConstantName />
                    </FormRow>


            <Editor
            value={metaObjects}
            onChange={handleChange}
            />

                    <ButtonStrip>
                        <Button
                            primary
                            type="submit"
                            dataTest={dataTest(
                                'forms-gatewaygenericform-submit'
                            )}
                            disabled={submitting}
                            icon={submitting ? <CircularLoader small /> : null}
                        >
                            {submitText}
                        </Button>

                        <Button onClick={() => onCancelClick(pristine)}>
                            {i18n.t('Cancel')}
                        </Button>
                    </ButtonStrip>
                </form>
            )}
        </Form>
    )
}

OutbreaksForm.defaultProps = {
    initialValues: {
        parameters: [],
    },
}

OutbreaksForm.propTypes = {
    onCancelClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
}
