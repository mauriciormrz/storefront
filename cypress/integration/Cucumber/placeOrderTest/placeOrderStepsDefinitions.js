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

    dataTable.hashes().forEach((elem) => {
        cy.addItemToShoppingCart(elem);
    });
    viewCartpage.getCheckOutButton().click();
})

And('I fill the checkout form with {string} and {string}', (shipping_method, payment_method) => {

    checkoutPage.getShippingAddressChangeButton().should('be.visible').click();
    checkoutPage.getShippingAddressContinueButton().should('be.visible').click();

    //checkoutPage.getShippingMethodChangeButton().click()
    checkoutPage.getShippingMethodRadio(shipping_method).check({ force: true }).should('be.checked')
    checkoutPage.getShippingMethodContinueButton().should('be.visible').click()

    checkoutPage.getPaymentMethodRadio(payment_method).check({ force: true }).should('be.checked')
    checkoutPage.getPaymentMethodContinueButton().should('be.visible').click();
})

Then('I submit the order with donation {string}', (donation) => {

    if (donation == "Yes") {
        checkoutPage.getDonationCheckBox().check({ force: true }).should('be.checked')
    }
    else {
        checkoutPage.getDonationCheckBox().uncheck({ force: true });
    }

    checkoutPage.getSubmitOrderButton().click();
})

And('I should see the order confirmation {string}', (order_congrats) => {

    orderConfirmationPage.getCongratsText().should('contain', order_congrats)

    orderConfirmationPage.getOrderNumberText().then(($el) => {
        var order = $el.text()
        order = order.replace('#', '')

        cy.log("Order:" + order)
    })
})
