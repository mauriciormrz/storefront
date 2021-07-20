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
import NewAccountPage from "./PageObjects/NewAccountPage";
import AddressBookPage from './PageObjects/AddressBookPage';
//import PaymentMethodsPage from './PageObjects/PaymentMethodsPage';


const homePage = new HomePage();
const signInPage = new SignInPage();
const productPage = new ProductPage();
const newAccountPage = new NewAccountPage();
const addressBookPage = new AddressBookPage();
//const paymentMethodsPage = PaymentMethodsPage();


Cypress.Commands.add('goToLoginPage', () => {

    cy.visit(Cypress.env('url') + "/us/en/").wait(2000);
    homePage.getDropDownLink('Sign In').click();
    signInPage.getSignInTitleText().should('have.text', 'Sign In');
})

Cypress.Commands.add('goToRegisterPage', () => {

    cy.url().then(url => {
        let currentURL = url;
        currentURL = currentURL.replace('%26initial_screen%3Dlogin', '');
        cy.visit(currentURL + '%26initial_screen%3Dsignup').wait(2000);
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

    productPage.getViewCartButton().click();
})

Cypress.Commands.add('addNewAddress', ({ first_name, last_name, address, city, state, country, zipcode, phone_number, default_address}) => {


    addressBookPage.getFirstNameText().type(first_name);
    addressBookPage.getLastNameText().type(last_name);
    addressBookPage.getAddressLine1Text().type(address);
    addressBookPage.getCityText().type(city);

    addressBookPage.getStateSelect().should('be.visible').select(state);
    addressBookPage.getCountrySelect().should('be.visible').select(country);

    addressBookPage.getZipCodeText().type(zipcode);
    addressBookPage.getPhoneNumberText().type(phone_number);

    if (default_address == "Yes") {
        addressBookPage.getDefaultAddressCheckBox().check({ force: true }).should('be.checked')
    }
    else {
        addressBookPage.getDefaultAddressCheckBox().uncheck({ force: true });
    }

    addressBookPage.getSaveButton().click();

})

//Cypress.Commands.add('addNewCreditCard', ({ first_name, last_name, card_number, month, year, cvv, default_payment, default_address}) => {
//
//
//    paymentMethodsPage.getAddNewPaymentMethodTypeSelect().should('be.visible').select('CreditCard');
//
//    paymentMethodsPage.getFirstNameText().type(first_name);
//    paymentMethodsPage.getLastNameText().type(last_name);
//
//    paymentMethodsPage.getCountrySelect().select(country);
//
//    paymentMethodsPage.getCardNumberText().type(card_number);
//    paymentMethodsPage.getExpiryMonthText().type(month);
//    paymentMethodsPage.getExpiryYearText().type(year);
//    paymentMethodsPage.getCardCVVText().type(cvv);
//
//
//    if (default_payment == "Yes") {
//        paymentMethodsPage.getDefaultPaymentText().check({ force: true }).should('be.checked')
//    }
//    else {
//        paymentMethodsPage.getDefaultPaymentText().uncheck({ force: true });
//    }
//
//    if (default_address == "Yes") {
//        paymentMethodsPage.getBillingSameAsShippingText().check({ force: true }).should('be.checked')
//    }
//    else {
//        paymentMethodsPage.getBillingSameAsShippingText().uncheck({ force: true });
//    }
//
//    addressBookPage.getSaveButton().click();
//
//})

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
