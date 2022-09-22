import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('I am at the Login page', () => {

    cy.goToLoginPage();
})

And('I log in to the Storefront with user {string}  and password {string}', (user, password) => {

    cy.loginStorefront(user, password);
})

When('I add the item to the shopping cart', (dataTable) => {
    
    cy.addingItemsToCart(dataTable);
})

And('I checkout the order with donation {string}', (donation) => {

    cy.checkoutOrder(donation);
})

Then('I fill the checkout form with {string} and {string}', (shipping_method, payment_method) => {

    cy.fillOutTheCheckoutForm(shipping_method, payment_method);
})


And('I should see the order confirmation {string}', (congrats_message) => {

    cy.seeTheOrderConfirmation(congrats_message);
})


