
//for (let [key, value] of Object.entries(existe)) {
//    cy.log(key, value);
//}

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
import CheckOutPage from './PageObjects/CheckOutPage';
import ViewCartPage from './PageObjects/ViewCartPage';
import MyAccountMenu from './PageObjects/MyAccountMenu';
import NewAccountPage from "./PageObjects/NewAccountPage";
import AddressBookPage from './PageObjects/AddressBookPage';
import PaymentMethodPage from './PageObjects/PaymentMethodPage';
import OrderConfirmationPage from './PageObjects/OrderConfirmationPage';



const homePage = new HomePage();
const signInPage = new SignInPage();
const productPage = new ProductPage();
const checkoutPage = new CheckOutPage();
const viewCartpage = new ViewCartPage();
const myAccountMenu = new MyAccountMenu();
const newAccountPage = new NewAccountPage();
const addressBookPage = new AddressBookPage();
const paymentMethodPage = new PaymentMethodPage();
const orderConfirmationPage = new OrderConfirmationPage();



Cypress.Commands.add('goToLoginPage', () => {

    cy.visit(Cypress.env('url') + "/us/en/");
    homePage.getDropDownLink('Sign In').click();
})

Cypress.Commands.add('welComeHomePage', () => {

    homePage.getDropDownLink('my Account').dblclick();
    myAccountMenu.getWelcomeText().should('contain', 'Welcome');
})

Cypress.Commands.add('goToRegisterPage', () => {

    cy.url().then(url => {
        let currentURL = url;
        currentURL = currentURL.replace('%26initial_screen%3Dlogin', '');
        cy.visit(currentURL + '%26initial_screen%3Dsignup');
    });
    newAccountPage.getCreateAccountTitleText().should('have.text', 'Create Your Account');
})

Cypress.Commands.add('fillOutTheAccountCreationForm', (first_name, last_name, phone_number, password) => {

    const today = new Date();

    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + (today.getDate())).slice(-2);
    const hour = ("0" + (today.getHours())).slice(-2);
    const minute = ("0" + (today.getMinutes())).slice(-2);
    const second = ("0" + (today.getSeconds())).slice(-2);

    const email = year + month + day + hour + minute + second + "@test.com";

    newAccountPage.getEmailText().type(email);
    newAccountPage.getFirstNameText().type(first_name);
    newAccountPage.getLastNameText().type(last_name);
    newAccountPage.getPhoneNumberText().type(phone_number);
    newAccountPage.getPasswordText().type(password);
    newAccountPage.getConfirmPasswordText().type(password);
})

Cypress.Commands.add('submitTheAccountCreationForm', () => {

    newAccountPage.getAcceptanceCheckBox().check({ force: true }).should('be.checked');
    newAccountPage.getCreateAccountButton().click();
})

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

    cy.toastMessage('Added to Cart Successfully');

    productPage.getViewCartButton().click();
})

Cypress.Commands.add('addingItemsToCart', (dataTable) => {

    dataTable.hashes().forEach((elem) => {
        cy.addItemToShoppingCart(elem);
    });
    viewCartpage.getCheckOutButton().click();
})

Cypress.Commands.add('addNewAddress', ({ first_name, last_name, address, city, state, country, zipcode, phone_number, default_address }) => {


    addressBookPage.getFirstNameText().type(first_name);
    addressBookPage.getLastNameText().type(last_name);
    addressBookPage.getAddressLine1Text().type(address);
    addressBookPage.getCityText().type(city);

    addressBookPage.getStateSelect().should('be.visible').select(state);
    addressBookPage.getCountrySelect().should('be.visible').select(country);

    addressBookPage.getZipCodeText().type(zipcode);
    addressBookPage.getPhoneNumberText().type(phone_number);

    if (default_address.toUpperCase() == "YES") {
        addressBookPage.getDefaultAddressCheckBox().check({ force: true }).should('be.checked')
    }

    addressBookPage.getSaveButton().click();

})

Cypress.Commands.add('clickIfElemExists', ({ elem }) => {

    cy.get('body').then($body => {

        if ($body.find(elem).length > 0) {

            cy.get(elem).should('be.visible').click();
        }
    });
})


Cypress.Commands.add('addNewCreditCard', ({ first_name, last_name, card_number, month, year, cvv, default_payment, billing_addres }) => {

    paymentMethodPage.getAddNewPaymentMethodTypeSelect().should('be.visible').select('CreditCard');

    paymentMethodPage.getFirstNameText().type(first_name);
    paymentMethodPage.getLastNameText().type(last_name);

    paymentMethodPage.getCardNumberText().type(card_number);
    paymentMethodPage.getExpiryMonthText().type(month);
    paymentMethodPage.getExpiryYearText().type(year);
    paymentMethodPage.getCardCVVText().type(cvv);


    if (default_payment.toUpperCase() == "YES") {
        paymentMethodPage.getDefaultPaymentText().check({ force: true });
    }

    //if (billing_address == "No") {
    //    paymentMethodPage.getBillingSameAsShippingText().uncheck({ force: true });
    //}

    paymentMethodPage.getSaveButton().click();

})


Cypress.Commands.add('toastMessage', (msg) => {


    cy.xpath("//div[contains(text(),'" + msg + "')]").should('be.visible');
    cy.get('#toastButton').click();
})


Cypress.Commands.add('fillOutTheCheckoutForm', (shipping_method, payment_method, referral_id) => {

    checkoutPage.getShippingAddressChangeButton().should('be.visible').click();
    checkoutPage.getShippingAddressContinueButton().should('be.visible').click();


    //checkoutPage.getShippingMethodChangeButton().click()
    checkoutPage.getShippingMethodRadio(shipping_method).check({ force: true }).should('be.checked')
    checkoutPage.getShippingMethodContinueButton().should('be.visible').click()

    if (referral_id) {

        checkoutPage.getReferralText().type(referral_id);
        checkoutPage.getReferralIdContinueButton().click();
        cy.toastMessage('Referral Id added successfully');

        checkoutPage.getregisterAgreementCheckbox().check({ force: true }).should('be.checked');
    }

    switch (payment_method) {

        case 'Credit Card':
            payment_method= 'Card ending with';
            break;
        case 'ACH':
            payment_method= 'Account ending in';
            break;
        case 'PayPal':
            payment_method= 'PayPal Account';
            break;
    }
    
    checkoutPage.getPaymentMethodRadio(payment_method).check({ force: true }).should('be.checked');
    checkoutPage.getPaymentMethodContinueButton().should('be.visible').click();

})

Cypress.Commands.add('submitOrder', (donation) => {


    if (donation.toUpperCase() == "YES") {
        checkoutPage.getDonationCheckBox().check({ force: true }).should('be.checked')
    }
    else {
        checkoutPage.getDonationCheckBox().uncheck({ force: true });
    }

    checkoutPage.getSubmitOrderButton().click();
})

Cypress.Commands.add('seeTheOrderConfirmation', (congrats_message) => {

    orderConfirmationPage.getCongratsText().should('contain', congrats_message)

    orderConfirmationPage.getOrderNumberText().then(($el) => {
        var order = $el.text()
        order = order.replace('#', '')

        cy.log("Order:" + order)
    })
})


//Cypress.Commands.add('ifExists', (selector) => {
//    cy.document().then(($document) => {
//        const documentResult = $document.querySelectorAll(selector)
//        cy.log(documentResult)
//        if (documentResult.length) {
//            cy.log("it exists, do something")
//            return ("it exists, do something")
//        }
//    })
//})

/*
Cypress + JavaScript + Node.
Java + Selenium-Webdriver + Serenity BDD (Maven, Gradle).
MySQL.
Design Patters.
GIT + GitHub.
SOLID Principles.
Java 8 Functional Progamming Lambdas & Streams.
Rest Assured API.
Jira.
*/

