
import HomePage from '../../../support/PageObjects/HomePage'
import SignInPage from "../../../support/PageObjects/SignInPage";
import ViewCartpage from "../../../support/PageObjects/ViewCartPage";
import CheckOutPage from "../../../support/PageObjects/CheckOutPage";
import OrderConfirmationPage from "../../../support/PageObjects/OrderConfirmationPage";

const homePage = new HomePage()
const signInPage = new SignInPage()
const viewCartpage = new ViewCartpage()
const checkoutPage = new CheckOutPage()
const orderConfirmationPage = new OrderConfirmationPage()


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('I am at the Login page', () => {

    cy.visit(Cypress.env('url') + "/us/en/").wait(2000);
    homePage.getDropDownLink('Sign In').click();
    signInPage.getSignInTitleText().should('be.visible').should('have.text', 'Sign In');
})

And('I log in to the Storefront with user {string}  and password {string}', (user, password) => {
    cy.loginStorefront(user, password)
})

When('I add the item to the shopping cart', (dataTable) => {
    dataTable.hashes().forEach((elem) => {
        cy.addItemToShoppingCart(elem)
    });
    viewCartpage.getCheckOutButton().click()
})

And('I fill the checkout form with {string} and {string}', (shipping_method, payment_method) => {

    //checkoutPage.getShippingAddressChangeButton().click();
    //checkoutPage.getShippingAddressContinueButton().click();

    if (shipping_method != "No") {
        checkoutPage.getShippingMethodChangeButton().click()
        checkoutPage.getShippingMethodRadio(shipping_method).check({ force: true }).should('be.checked')
        checkoutPage.getShippingMethodContinueButton().click()
    }

    checkoutPage.getPaymentMethodRadio(payment_method).check({ force: true }).should('be.checked')
    checkoutPage.getPaymentMethodContinueButton().click()
})

Then('I submit the order with donation {string}', (donation) => {

    if (donation == "Yes") {
        checkoutPage.getDonationCheckBox().check({ force: true }).should('be.checked')
    }
    else {
        checkoutPage.getDonationCheckBox().uncheck({ force: true })
    }

    checkoutPage.getSubmitOrderButton().click()
})

And('I should see the order confirmation {string}', (order_congrats) => {
    orderConfirmationPage.getCongratsText().should('contain', order_congrats)

    orderConfirmationPage.getOrderNumberText().then(($el) => {
        var order = $el.text()
        order = order.replace('#', '')

        cy.log("Order:" + order)
    })
})
