import { useDataQuery } from '@dhis2/app-runtime'

export const CONSTANT_QUERY_BY_CODE = {
    constant: {
        resource: 'constants',
        params: {
            paging: false,
            fields: ['id', 'displayName', 'code', 'description'],
            filter: ['value:eq:-1000001'],
        },
    },
}

export const useReadGoDataServerConfigConstantQueryByCode = code =>
    useDataQuery(CONSTANT_QUERY_BY_CODE, { variables: { code } })
