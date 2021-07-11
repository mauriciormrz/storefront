
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
    cy.visit(Cypress.env('url') + "/us/en/")
    homePage.getSignInLink().click()
    signInPage.getSignInTitleText().should('be.visible').should('have.text', 'Sign In')
})

And('I log in to the Storefront with user {string}  and password {string}', (user, password) => {
    cy.loginStorefront(user, password)
})

When('I add the item to the shopping cart', (dataTable) => {

    let sku
    let item
    let quantity
    let price
    let pv

    dataTable.hashes().forEach(elem => {
        for (let key in elem) {

            switch (key) {
                case 'sku': sku = elem[key]
                    break
                case 'item': item = elem[key]
                    break
                case 'quantity': quantity = elem[key]
                    break
                case 'price': price = elem[key]
                    break
                case 'pv': pv = elem[key]
                    break
            }
        }
        cy.addItemToShoppingCart(sku, item, quantity)
    });
    viewCartpage.getCheckOutButton().click()
})

And('I fill the checkout form with {string} and {string}', (shipping_method, payment_method) => {

    if (shipping_method != "No") {
        checkoutPage.getShippingMethodChangeButton().click()
        checkoutPage.getShippingMethodRadio(shipping_method).check({ force: true }).should('be.checked')
        checkoutPage.getShippingMethodContinueButton().click()
    }

    checkoutPage.getPaymentMethodRadio(payment_method).check({ force: true }).should('be.checked')
    checkoutPage.getPaymentMethodContinueButton().click()
})

Then('I submit the order with {string}', (donation) => {

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

    orderConfirmationPage.getOrderNumberText().then(function ($el) {
        var order = $el.text()
        order = order.replace('#', '')

        cy.log("Order:" + order)
    })
})
