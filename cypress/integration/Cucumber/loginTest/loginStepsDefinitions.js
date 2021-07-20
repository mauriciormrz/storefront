import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from '../../../support/PageObjects/HomePage';
import SignInPage from "../../../support/PageObjects/SignInPage";
import MyAccountMenu from "../../../support/PageObjects/MyAccountMenu";
import SubscriptionsPage from "../../../support/PageObjects/SubscriptionsPage";
import EndPage from '../../../support/PageObjects/EndPage';


const homePage = new HomePage();
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
})

And('I fill in the password field with the value {string}', (password) => {

    signInPage.getPasswordText().type(password);
})

And('I hit the login button', () => {

    signInPage.getLoginButton().click();
})

Then('I should be at the home page', () => {

    homePage.getDropDownLink('my Account').dblclick()
    myAccountMenu.getWelcomeText().should('contain', 'Welcome')
})

And('I logout', () => {

    myAccountMenu.getSignOutLink().click();
    endPage.getLogOutMessageText().should('be.visible');

})

Then('the error message {string} is displayed', (error_message) => {

    signInPage.getErrorMessageText().should('contain', error_message)
})

Given('I am at the Become a Member page', () => {

    cy.goToRegisterPage();
})


When('I fill out the account creating form', (dataTable) => {

    const arregloHashes = dataTable.hashes()[0]
    const { first_name, last_name, phone_number, password } = arregloHashes

    memberName = first_name + " " + last_name;

    cy.fillOutTheAccountCreationForm(first_name, last_name, phone_number, password);

})

And('I submit the form', () => {

    cy.submitTheAccountCreationForm();
})

And('get his Member Number', () => {

    myAccountMenu.getSubcriptionsLink().click();
    subscriptionsPage.getAccountName().should('contain', memberName);

    //let message = cy.ifExists('.btn-outline-dark');
    //cy.log('aqui');
    //cy.log(Object.values(message)[0]);
    //cy.log(Object.values(message)[1]);
    //cy.log(Object.values(message)[2]);
    //cy.log(Object.values(message)[3]);
    //cy.log(Object.values(message)[4]);
    //cy.log('aqui2');

    cy.get('button.btn.btn-sm.btn-outline-dark.yl_btn.shep-btn-light.shepherd-button').click();
    
    subscriptionsPage.getAccountID().then(($el) => {

        cy.log("Member Number: " + $el.text());
    })
})

When('I Loggin in Storefront with valid credentials {string} and {string}', (user, password) => {
    cy.loginStorefront(user, password);
})

