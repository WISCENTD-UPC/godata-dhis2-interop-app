import { useDataMutation } from '@dhis2/app-runtime'

export const UPDATE_TASK_CONSTANT_MUTATION = {
    resource: 'constants',
    id: ({ id }) => id,
    type: 'update',
    data: ({ allValues, nameInput }) => ({
        //displayName: 'Go.Data (URL)1',
        shortName: nameInput,
        //code: 'cases1',
        name: nameInput,
        description: JSON.stringify(allValues) ,
/*        createdBy: {
            code: 'admin', 
            displayName: 'admin admin',
            name: 'admin admin',
            id: 'M5zQapPyTZI',
            username: 'admin',
            },*/
            created: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
        value: '-1000002',
    }),
}

export const useUpdateTaskConstantMutation = () =>
useDataMutation(UPDATE_TASK_CONSTANT_MUTATION)
