import { useDataQuery } from '@dhis2/app-runtime'

export const CONSTANT_QUERY_MAPPINGS_CODE = {
    constants: {
        resource: 'constants',
        params: {
            paging: false,
            fields: ['id', 'displayName', 'code', 'description', 'shortName'],
            filter: ['value:eq:-1000002'],
        },
    },
}

export const useReadTaskConstantsQueryForTasks = value =>
    useDataQuery(CONSTANT_QUERY_MAPPINGS_CODE, { variables: { value } })