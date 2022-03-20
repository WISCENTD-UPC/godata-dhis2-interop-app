import { useDataMutation } from '@dhis2/app-runtime'

export const CREATE_CASES_CONSTANT_MUTATION = {
    resource: 'constants',
    type: 'create',
    data: ({ allValues, nameInput }) => ({
        shortName: nameInput,
        name: nameInput,
        description: JSON.stringify(allValues),
        created: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        value: '-1000000',
    }),
}

export const useCreateCasesConstantMutation = () =>
    useDataMutation(CREATE_CASES_CONSTANT_MUTATION)
