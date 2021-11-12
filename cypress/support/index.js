import '@dhis2/cli-utils-cypress/support'
import './all.js'

Cypress.Commands.add('visitWhenStubbed', (url, options = {}) => {
    return cy
        .readFile('cypress/assets/unfetch.umd.js', { log: false })
        .then(content => {
            return cy.visit(url, {
                ...options,
                onBeforeLoad: win => {
                    delete win.fetch
                    win.eval(content)
                    win.fetch = win.unfetch
                    options.onBeforeLoad && options.onBeforeLoad(win)
                },
            })
        })
})

const loginEndPoint = 'dhis-web-commons-security/login.action'

const getApiBaseUrl = () => {
    const baseUrl = Cypress.env('dhis2_base_url')

    if (!baseUrl) {
        throw new Error(
            'No `dhis2_base_url` found. Please make sure to add it to `cypress.env.json`'
        )
    }

    return baseUrl
}

const handleLogin = () => {
    before(() => {
        // Persist this across tests so we don't have to login before each test
        Cypress.Cookies.defaults({
            whitelist: 'JSESSIONID',
        })

        // This will authenticate and set the session cookie
        const username = Cypress.env('dhis2_username')
        const password = Cypress.env('dhis2_password')
        const loginUrl = getApiBaseUrl()

        cy.request({
            url: `${loginUrl}/${loginEndPoint}`,
            method: 'POST',
            form: true,
            followRedirect: true,
            body: {
                j_username: username,
                j_password: password,
                '2fa_code': '',
            },
        })
    })

    beforeEach(() => {
        // This ensures the app platform knows which URL to use even if REACT_APP_DHIS2_BASE_URL is undefined
        // It also ensures that the value from the cypress env is used instead of REACT_APP_DHIS2_BASE_URL
        const baseUrl = getApiBaseUrl()
        localStorage.setItem('DHIS2_BASE_URL', baseUrl)
    })
}

handleLogin()
