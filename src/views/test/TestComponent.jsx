import React, { useState, useEffect } from 'react'
import api from '../../utils/api'
import { useConfig } from '@dhis2/app-runtime'
import axios from 'axios'
import dot from 'dot-object'
/*
{
    "created": "2022-02-14T00:10:44.898",
    "orgUnit": "Plmg8ikyfrK",
    "createdAtClient": "2022-02-14T00:10:44.898",
    "trackedEntityInstance": "QtEz2seJard",
    "lastUpdated": "2022-02-14T00:11:41.642",
    "trackedEntityType": "MCPQUTHX1Ze",
    "lastUpdatedAtClient": "2022-02-14T00:10:44.898",
    "coordinates": "[21,12]",
    "inactive": false,
    "deleted": false,
    "featureType": "POINT",
    "geometry": {
      "type": "Point",
      "coordinates": [
        21,
        12
      ]
    },
    "programOwners": [],
    "enrollments": [],
    "relationships": [],
    "attributes": [
      {
        "lastUpdated": "2022-02-14T00:10:44.943",
        "storedBy": "admin",
        "code": "FIRST_NAME",
        "displayName": "First Name",
        "created": "2022-02-14T00:10:44.943",
        "valueType": "TEXT",
        "attribute": "sB1IHYu2xQT",
        "value": "dd"
      },
      {
        "lastUpdated": "2022-02-14T00:10:44.940",
        "storedBy": "admin",
        "code": "PATINFO_SEX",
        "displayName": "Sex",
        "created": "2022-02-14T00:10:44.940",
        "valueType": "TEXT",
        "attribute": "oindugucx72",
        "value": "MALE"
      }
    ]
  }*/

const global = [
    {
        dhis: 'created',
        godata: 'createdAt',
    },
    {
        dhis: '',
    },
]

export const TestComponent = () => {
    const config = useConfig()
    const [cases, setCases] = useState()

    const createAuthenticationHeader = (username, password) => {
        return (
            'Basic ' +
            new Buffer.from(username + ':' + password).toString('base64')
        )
    }

    const constructFromTemplateMappingPayload = (
        template,
        mapping,
        payload,
        defaults,
        isDHISEndpoint
    ) => {
        console.log(payload)
        template = dot.dot(template)
        payload = payload[1] //1
        console.log(template) //DHIS template
        console.log(mapping)
        console.log(payload)

        const recipe = {}
        const [from, to] = isDHISEndpoint
            ? ['godata', 'dhis']
            : ['dhis', 'godata']
        Object.keys(template).forEach(templateKey => {
            //templateKey = 'created' (in dhis)
            //If Godata -> DHIS
            //  Check if created in mapping[x].dhis == created
            //  and get mapping[x].godata
            const coincidence = mapping.find(x => x[to] === templateKey)
            if (!!coincidence) recipe[coincidence[from]] = coincidence[to]
        })
        console.log(recipe)
        console.log(dot.transform(recipe, payload))
        //add defaults dotted
        // TODO: Add only if not added
        const dotObjWithDefaults = {
            ...dot.dot(dot.transform(recipe, payload)),
            ...dot.dot(defaults),
        }

        console.log(dot.object(dotObjWithDefaults))
        return dot.object(dotObjWithDefaults)
    }

    useEffect(() => {
        Promise.all([
            api.getValue('dhis2-godata-interop-configuration', 'godatauser'),
            api.getValue(
                'dhis2-godata-interop-configuration',
                'godatauserpass'
            ),
            api.getValue('dhis2-godata-interop-configuration', 'godatabaseurl'),
            api.getValue('dhis2-godata-interop-configuration', 'dhisuser'),
            api.getValue('dhis2-godata-interop-configuration', 'dhisuserpass'),
        ])
            .then(values => values.map(e => e.value))
            .then(values => {
                const res = {}
                const [
                    godatauser,
                    godatauserpass,
                    godatabaseurl,
                    dhisuser,
                    dhisuserpass,
                ] = values
                res.godata = {
                    urlTemplate: godatabaseurl,
                    username: godatauser,
                    password: godatauserpass,
                }

                const dhisBaseUrl = config.baseUrl

                res.dhis = {
                    urlTemplate: dhisBaseUrl,
                    username: dhisuser,
                    password: dhisuserpass,
                }
                return res
            })
            .then(async res => {
                res.godata.token = await axios({
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods':
                            'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Content-Type': 'application/json',
                        crossDomain: true,
                    },
                    data: {
                        email: res.godata.username,
                        password: res.godata.password,
                    },
                    url: res.godata.urlTemplate + '/api/users/login',
                }).then(result => result.data.id)
                //setToken(res.godata.token)
                return res
            })
            .then(async res => {
                const outbreaksIds = await axios
                    .get(
                        `${res.godata.urlTemplate}/api/outbreaks?access_token=${res.godata.token}`,
                        {
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Methods':
                                    'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                'Content-Type': 'application/json',
                                crossDomain: true,
                            },
                        }
                    )
                    .then(result => result.data.map(e => e.id))
                const cases = await Promise.all(
                    outbreaksIds.map(id => {
                        return axios
                            .get(
                                `${res.godata.urlTemplate}/api/outbreaks/${id}/cases?access_token=${res.godata.token}`,
                                {
                                    headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Methods':
                                            'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                        'Content-Type': 'application/json',
                                        crossDomain: true,
                                    },
                                }
                            )
                            .then(r => r.data)
                    })
                )
                setCases(cases)
                res.cases = cases
                return res
            })
            .then(async res => {
                const task = await axios.get(
                    res.dhis.urlTemplate +
                    '/api/constants/' +
                    'i42Jg2SHiuj' + // Task id
                        '?paging=false&fields=id,displayName,code,description,shortName,name',
                    {
                        crossDomain: true,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods':
                                'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                            'Content-Type': 'application/json',
                            Authorization: createAuthenticationHeader(
                                res.dhis.username,
                                res.dhis.password
                            ),
                        },
                    }
                )
                res.template = JSON.parse(task.data.description)[3]
                res.task = JSON.parse(task.data.description)
                res.mapping = await axios.get(
                    res.dhis.urlTemplate +
                        '/api/constants/' +
                        res.task[5] +
                        '?paging=false',
                    {
                        crossDomain: true,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods':
                                'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                            'Content-Type': 'application/json',
                            Authorization: createAuthenticationHeader(
                                res.dhis.username,
                                res.dhis.password
                            ),
                        },
                    }
                )
                res.mapping = JSON.parse(res.mapping.data.description)
                const payload = constructFromTemplateMappingPayload(
                    res.template,
                    res.mapping[1],
                    res.cases[0],
                    res.mapping[2],
                    true
                )
                console.log({payload})
                const DHISResponse = await axios.post(
                    `${res.dhis.urlTemplate}/api/trackedEntityInstances`,
                    payload,
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods':
                                'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                            'Content-Type': 'application/json',
                            crossDomain: true,
                            Authorization: createAuthenticationHeader(
                                res.dhis.username,
                                res.dhis.password
                            )
                        }
                    }
                )
                console.log(DHISResponse)
            })
    }, [])

    return (
        <code>
            {/* First Step: <br />
            Login Details DHIS: {JSON.stringify(loginDetailsDhis)}
            <br />
            Login Details Godata: {JSON.stringify(loginDetailsGodata)}
            <br />
            Second Step: <br /> GET GODATA TOKEN:
            {JSON.stringify(godataToken)} */}
            GODATA CASES:
            <br />
            {JSON.stringify(cases)}
        </code>
    )
}
