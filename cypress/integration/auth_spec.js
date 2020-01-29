describe('App initialization and authorization', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Login/Register').click()
    })
    
    it('Registers a new user', () => {
        // With this setup - the new user must be removed from the DB after each time the test is ran
        // If doing manually, the json-server must be stopped, then delete the user, then restart json-server
        
        const newUser = {
            email: "tom_user@example.com",
            username: "tom_user",
            password: "password1",
            confirmPassword: "password1"
        }

        cy.get('.auth-register').click()
        cy.get('.registerModal-email').type(newUser.email)
        cy.get('.registerModal-username').type(newUser.username)
        cy.get('.registerModal-password').type(newUser.password)
        cy.get('.registerModal-confirmPassword').type(newUser.confirmPassword)
        cy.get('.registerModal-submit').click()

        cy.contains('Please Log In Or Register')
    })

    it.only('Logs in an existing user', () => {
        
    })
})

// describe('App initialization', function() {
//     it('Loads todos on page load', function() {
//         cy.seedAndVisit()

//         cy.get('.todo-list li')
//             .should('have.length', 4)
//     })

//     it('Displays an error on failure', () => {
//         cy.server()
//         cy.route({
//             url: 'api/todos',
//             method: 'GET',
//             status: 500,
//             response: {}
//         })
//         cy.visit('/')

//         cy.get('.todo-list li')
//             .should('not.exist')

//         cy.get('.error')
//             .should('be.visible')
//     })
// })