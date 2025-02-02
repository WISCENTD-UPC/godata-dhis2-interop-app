import { useDataQuery } from '@dhis2/app-runtime'

export const CONSTANT_QUERY_CONSTANT_BY_ID = {
    constant: {
        resource: 'constants',
        id: ({ id }) => id,
        params: {
            paging: false,
            fields: ['id', 'displayName', 'code', 'description', 'shortName', 'name'],
        },
    },
}

export const useReadTaskConstantsQueryById = id =>
    useDataQuery(CONSTANT_QUERY_CONSTANT_BY_ID, { variables: { id } })
