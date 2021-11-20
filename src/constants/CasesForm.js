import { Button, ButtonStrip, ReactFinalForm, CenteredContent, CircularLoader } from '@dhis2/ui'
import React, { useEffect, useState, useMemo } from 'react'
import { PropTypes } from '@dhis2/prop-types'
import {useReadMappingConfigConstantsQueryForConfig, useReadProgramsQueryForMappings} from '.'

import axios from 'axios'

import 'jsoneditor-react/es/editor.min.css'
import ReactJson from 'react-json-view'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import dot from 'dot-object';

import {
    FieldConstantName,
} from '../constants'
import { FormRow } from '../forms'
import { PageSubHeadline } from '../headline'
import { dataTest } from '../dataTest'
import i18n from '../locales'

const { Form } = ReactFinalForm

export const CasesForm = ({
    onCancelClick,
    onSubmit,
    initialValues,
}) => {
    
    const [open, setOpen] = useState(false);
    const [dhisValue, setDhisValue] = useState({});
    const [godataValue, setGodataValue] = useState([]);
    const [loginData, setLoginDetails] = useState([])

    var mappings, dhismappings
    var instanceObject

    const { loading, data, error  } = useReadMappingConfigConstantsQueryForConfig()
    const { lloading, progData, lerror } = useReadProgramsQueryForMappings()
    console.log(JSON.stringify(progData))
    const programInstance = 
    progData && progData.programs.programs.length >0
    ? JSON.parse(progData.programs.programs[0])
            : {}

    useEffect(() => {
 
        const loginDetails = 
        data && data.constants.constants.length >0
        ? JSON.parse(data.constants.constants[0].description)
                : {}

        if(data) {
            async function login() {
                try {
                  let res = await axios({
                    method: 'POST',
                    data: {
                        email: loginDetails.username,
                        password: loginDetails.password,
                    },
                    url: loginDetails.urlTemplate+"/api/users/login",
              
                  });
                  if (res.status == 200) {
                    console.log('res.data.id ' + res.data.id);

                    const getInstanceData = async () => {
                        instanceObject = await axios.get(
                            loginDetails.urlTemplate +'/api/outbreaks', {
                                headers : {
                                    Authorization: res.data.id,
                                  }
                                });


                                function iterate(obj) {
                                    var walked = [];
                                    var stack = [{obj: obj, stack: ''}];
                                    mappings = [];
                                    var i = 0
                                    while(stack.length > 0)
                                    {
                                        var item = stack.pop();
                                        var obj = item.obj;
                                        for (var property in obj) {
                                            if (obj.hasOwnProperty(property)) {
                                                if (typeof obj[property] == "object") {
                                                  var alreadyFound = false;
                                                  for(var i = 0; i < walked.length; i++)
                                                  {
                                                    if (walked[i] === obj[property])
                                                    {
                                                      alreadyFound = true;
                                                      break;
                                                    }
                                                  }
                                                  if (!alreadyFound)
                                                  {
                                                    walked.push(obj[property]);
                                                    stack.push({obj: obj[property], stack: item.stack + '.' + property});
                                                  }
                                                }
                                                else
                                                {
                                                    i++
                                                    mappings.push(
                                                        {
                                                            "godata": (item.stack + '.' + property).substr(1) , 
                                                            "dhis2": '',
                                                        })
                        
                                }
                            }
                          //  console.log('mappings length ' + mappings.length)
                        }
                                            }      
                                        }          
                            iterate(instanceObject.data[0])
                            setGodataValue(mappings)



                      };
                      getInstanceData();
                  };
                }
                catch (error) {
                    console.log(error);
                };
              }
              login()
              console.log('outbreaks: ' + JSON.stringify(instanceObject))
            }

            
            function iterate2(obj) {
                var walked = [];
                var stack = [{obj: obj, stack: ''}];
                dhismappings = [];
                while(stack.length > 0)
                {
                    var item = stack.pop();
                    var obj = item.obj;
                    for (var property in obj) {
                        if (obj.hasOwnProperty(property)) {
                            if (typeof obj[property] == "object") {
                              var alreadyFound = false;
                              for(var i = 0; i < walked.length; i++)
                              {
                                if (walked[i] === obj[property])
                                {
                                  alreadyFound = true;
                                  break;
                                }
                              }
                              if (!alreadyFound)
                              {
                                walked.push(obj[property]);
                                stack.push({obj: obj[property], stack: item.stack + '.' + property});
                              }
                            }
                            else
                            {
                                dhismappings.push(
                                    {
                                        "dhis2": (item.stack + '.' + property).substr(1) 
                                    })
                                //mappings.set(item.stack + '.' + property , 'to be other stuff');
                                //console.log(item.stack + '.' + property /*+ "=" + obj[property]*/);
                            }
                        }
                    }
                }
                console.log('dhis2 mappings length ' + dhismappings.length)
            }
        
        iterate2(programInstance)
setDhisValue(dhismappings)
        return () => {
            
            console.log("This will be logged on unmount");
          }
      }, [data, progData])

    if (loading) {
        return (
            <>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </>
        )
    }
    if (error) {
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

    if (lloading) {
        return (
            <>
                <CenteredContent>
                    <CircularLoader />
                </CenteredContent>
            </>
        )
    }
    if (lerror) {
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

    const editNode = ({})=>{
        console.log('editjsoneditor')
        return true
    }

    const copyFromPopup  = (instance)=>{
        console.log(instance.src)
//read and replace dhuis2 placeholder and update ui
          var ths = dot.str('dhis2', instance.src, godataValue[dhisValue[1]])
          console.log('str ths: ' + JSON.stringify(ths))
          setGodataValue(godataValue => {
              const Outbreak = [...godataValue];
              Outbreak[dhisValue[1]] = ths;
              return Outbreak
            })
        setOpen(false)
        return true
    }

    const selectedNode = (instance)=>{
        //store initial values into useStore, we need this to replace placeholder next
        setDhisValue(instance.namespace),
        instance.name == 'dhis2'
        ? setOpen(true)
        : console.log('wrong element selected'), 

        console.log('select Node with popup:  ' + JSON.stringify(instance.namespace ))
        return true
    }

    const onCloseModal = () => {setOpen(false)}
    const addNode = () => {console.log('editjsoneditor')}

    const deleteNode = () => {console.log('deletejsoneditor')}


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

                    <div><ReactJson 
            src={godataValue}
            onAdd={addNode}
            onEdit={editNode}
            onDelete={deleteNode}
            enableClipboard={selectedNode}
            theme="apathy:inverted"
            name={'Outbreak'}
            displayArrayKey={true}
            />
            </div>

            <Modal open={open} onClose={onCloseModal} center>
        <h2>Select DHIS2 metadata</h2>
        <div><ReactJson
            src={dhismappings}
            enableClipboard={copyFromPopup}
            theme="apathy:inverted"
            name={'Program'}
            displayArrayKey={true}
            />
            </div>
    </Modal>
                    <ButtonStrip>


                        <Button onClick={() => onCancelClick(pristine)}>
                            {i18n.t('Cancel')}
                        </Button>
                    </ButtonStrip>
                </form>
            )}
        </Form>
    )
}

CasesForm.defaultProps = {
    initialValues: {
        parameters: [],
    },
}

CasesForm.propTypes = {
    onCancelClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
}
