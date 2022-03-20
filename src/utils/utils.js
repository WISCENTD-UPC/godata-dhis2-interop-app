import axios from 'axios'
import { useConfig } from '@dhis2/app-runtime'
const config = useConfig()

export const createAuthenticationHeader = (username, password) => {
    return (
        'Basic ' + new Buffer.from(username + ':' + password).toString('base64')
    )
}

/** 
 * @return
    {
        godata: {
            urlTemplate: godatabaseurl,
            username: godatauser,
            password: godatauserpass,
        }
        dhis: {
            urlTemplate: dhisBaseUrl,
            username: dhisuser,
            password: dhisuserpass,
        }
    }
*/

export const getCredentialsFromDataStore = async () => {
    return await Promise.all([
        api.getValue('dhis2-godata-interop-configuration', 'godatauser'),
        api.getValue('dhis2-godata-interop-configuration', 'godatauserpass'),
        api.getValue('dhis2-godata-interop-configuration', 'godatabaseurl'),
        api.getValue('dhis2-godata-interop-configuration', 'dhisuser'),
        api.getValue('dhis2-godata-interop-configuration', 'dhisuserpass'),
    ]).then(values => {
        const [
            godatauser,
            godatauserpass,
            godatabaseurl,
            dhisuser,
            dhisuserpass,
        ] = values
        const res = {}
        res.godata = {
            urlTemplate: godatabaseurl,
            username: godatauser,
            password: godatauserpass,
        }

        res.dhis = {
            urlTemplate: config.baseUrl,
            username: dhisuser,
            password: dhisuserpass,
        }
        return res
    })
}
