import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


import SignInPage from "../../../support/PageObjects/SignInPage";
import MyAccountMenu from "../../../support/PageObjects/MyAccountMenu";
import SubscriptionsPage from "../../../support/PageObjects/SubscriptionsPage";
import EndPage from '../../../support/PageObjects/EndPage';


const signInPage = new SignInPage();
const myAccountMenu = new MyAccountMenu();
const subscriptionsPage = new SubscriptionsPage();
const endPage = new EndPage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

let memberName


Given('I am at the Login page', () => {

    cy.goToLoginPage();
})


When('I fill in the account email field with the value {string}', (user) => {

    signInPage.getUserNameText().type(user);
    signInPage.getContinueButton().click();
})

And('I fill in the password field with the value {string}', (password) => {

    signInPage.getPasswordText().type(password);
})

And('I hit the login button', () => {

    signInPage.getLoginButton().click();
})

Then('I should be at the home page', () => {

    cy.welComeHomePage();
})

And('I logout', () => {

    myAccountMenu.getSignOutLink().click();
    endPage.getLogOutMessageText().should('be.visible');

})

Then('the error message {string} is displayed', (error_message) => {

//    signInPage.getErrorMessageText().should('contain', error_message)
})

Given('I am at the Become a Member page', () => {

    cy.goToRegisterPage();
})

Given('I select the country {string} and the language {string}', (country, language) => {

 //   cy.confirmCountryAndLenguage(country, language);
})


When('I fill out the account creating form', (dataTable) => {

//    const arregloHashes = dataTable.hashes()[0]
//    const { first_name, last_name, phone_number, password } = arregloHashes;
//
//    memberName = first_name + " " + last_name;
//
//    cy.fillOutTheAccountCreationForm(first_name, last_name, phone_number, password);
})

And('I submit the form', () => {

//    cy.submitTheAccountCreationForm();
})

And('get his Member Number', () => {

//    myAccountMenu.getSubcriptionsLink().trigger('mouseover').click();
//    subscriptionsPage.getAccountName().should('contain', memberName);
//
//    cy.clickIfElemExists("button.btn.btn-sm.btn-outline-dark.yl_btn.shep-btn-light.shepherd-button");
//
//    subscriptionsPage.getAccountID().then(($el) => {
//        cy.log("Member Number: " + $el.text());
//    })
})

When('I Loggin in Storefront with valid credentials {string} and {string}', (user, password) => {

//    cy.loginStorefront(user, password);
})

