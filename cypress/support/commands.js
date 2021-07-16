// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginStorefront',(email,password)=>{
    cy.get('#loginUsername').type(email)
    cy.get('#loginPassword').type(password)
    cy.get('#login-btn').click()
    cy.wait(2000)
    cy.xpath("//p[contains(text(),'my Account')]")
    //cy.get('#dropdown-cutom> p').should('have.text', 'my Account')
})

Cypress.Commands.add('addItemToShoppingCart',({sku,item,quantity})=>{
    cy.get('[data-testid=qa-search-input]').type(sku).type('{enter}')
    cy.wait(2000)
    cy.get('[data-testid=qa-product-name]').should('contain', item)
    cy.get("[data-testid=qa-product-quantity]").clear().type(quantity)
    cy.get('[data-testid=qa-addcart]').click()
    cy.get('[data-testid=qa-cartcheckout]').click()
})

Cypress.Commands.add('ifExists', (selector)=> {
    cy.document().then(($document) => {
        const documentResult = $document.querySelectorAll(selector)
        cy.log(documentResult)
        if (documentResult.length) {
            cy.log("it exists, do something")
           return ("it exists, do something")
        }
      }) 
 })
