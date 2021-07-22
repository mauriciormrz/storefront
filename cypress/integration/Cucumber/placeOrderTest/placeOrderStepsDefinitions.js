import ViewCartpage from "../../../support/PageObjects/ViewCartPage";
import CheckOutPage from "../../../support/PageObjects/CheckOutPage";
import OrderConfirmationPage from "../../../support/PageObjects/OrderConfirmationPage";


const viewCartpage = new ViewCartpage();
const checkoutPage = new CheckOutPage();
const orderConfirmationPage = new OrderConfirmationPage();


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

And('I fill the checkout form with {string} and {string}', (shipping_method, payment_method) => {

    cy.fillOutTheCheckoutForm(shipping_method, payment_method);
})

Then('I submit the order with donation {string}', (donation) => {

    cy.submitOrder(donation);
})

And('I should see the order confirmation {string}', (congrats_message) => {

    cy.seeTheOrderConfirmation(congrats_message);
})
