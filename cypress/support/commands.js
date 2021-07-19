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

import HomePage from './PageObjects/HomePage'
import SignInPage from "./PageObjects/SignInPage";
import ProductPage from "./PageObjects/ProductPage";


const homePage = new HomePage();
const signInPage = new SignInPage();
const productPage = new ProductPage();


Cypress.Commands.add('loginStorefront', (user, password) => {

    signInPage.getUserNameText().type(user);
    signInPage.getPasswordText().type(password);
    signInPage.getLoginButton().click();

    homePage.getDropDownLink('my Account').should('be.visible');
})

Cypress.Commands.add('addItemToShoppingCart', ({ sku, item, quantity }) => {

    homePage.getSearchInput().type(sku).type('{enter}');

    productPage.getProductNameText().should('contain', item);
    productPage.getQuantityCtrl().clear().type(quantity);
    productPage.getAddCartButton().click();

    productPage.getViewCartButton().click();
})

Cypress.Commands.add('ifExists', (selector) => {
    cy.document().then(($document) => {
        const documentResult = $document.querySelectorAll(selector)
        cy.log(documentResult)
        if (documentResult.length) {
            cy.log("it exists, do something")
            return ("it exists, do something")
        }
    })
})
