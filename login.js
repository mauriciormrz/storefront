
cy.visit(Cypress.env('url') + "/us/en/")
cy.wait(2001)
cy.get('.menu-title').click()
cy.get('.signin-title').should('have.text', 'Sign In')
cy.get('#loginUsername').type("5010")
cy.get('#loginPassword').type("Password1")
cy.get('#login-btn').click()