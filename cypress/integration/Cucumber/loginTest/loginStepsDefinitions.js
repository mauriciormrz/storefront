import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from '../../../support/PageObjects/HomePage'
import SignInPage from "../../../support/PageObjects/SignInPage";
import NewAccountPage from "../../../support/PageObjects/NewAccountPage";
import MyAccountMenu from "../../../support/PageObjects/MyAccountMenu";
import SubscriptionsPage from "../../../support/PageObjects/SubscriptionsPage";


const homePage = new HomePage()
const signInPage = new SignInPage()
const myAccountMenu = new MyAccountMenu()
const newAccountPage = new NewAccountPage()
const subscriptionsPage = new SubscriptionsPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

let memberName


Given('I am at the Login page', () => {
    cy.visit(Cypress.env('url') + "/us/en/").wait(2000)
    homePage.getDropDownLink('Sign In').click()
    signInPage.getSignInTitleText().should('have.text', 'Sign In')
})


When('I fill in the account email field with the value {string}', (user) => {
    signInPage.getUserNameText().type(user)
})

And('I fill in the password field with the value {string}', (password) => {
    signInPage.getPasswordText().type(password)
})

And('I hit the login button', () => {
    signInPage.getLoginButton().click()
})

Then('I should be at the home page', () => {
    //homePage.getMyAccountLink().should('have.text', 'my Account').dblclick()
    homePage.getDropDownLink('my Account').dblclick()
    myAccountMenu.getWelcomeText().should('contain', 'Welcome')
})

Then('the error message {string} is displayed', (error_message) => {
    signInPage.getErrorMessageText().should('contain', error_message)
})

Given('I am at the Become a Member page', () => {
    cy.url().then(url => {
        let currentURL = url;
        currentURL = currentURL.replace('%26initial_screen%3Dlogin', '')
        cy.visit(currentURL + '%26initial_screen%3Dsignup').wait(2000)
    });
    newAccountPage.getCreateAccountTitleText().should('have.text', 'Create Your Account')
})


When('I fill out the account creating form', (dataTable) => {

    const arregloHashes = dataTable.hashes()[0]
    const { first_name, last_name, phone_number, password } = arregloHashes

     memberName = first_name + " " + last_name

     const today = new Date();
     
     const year = today.getFullYear();
     const month = ("0" + (today.getMonth() + 1)).slice(-2)
     const day = ("0" + (today.getDate())).slice(-2)
     const hour = ("0" + (today.getHours())).slice(-2)
     const minute = ("0" + (today.getMinutes())).slice(-2)
     const second = ("0" + (today.getSeconds())).slice(-2)
     const email = year + month + day + hour + minute + second + "@test.com"

     newAccountPage.getEmailText().type(email)
     newAccountPage.getFirstNameText().type(first_name)
     newAccountPage.getLastNameText().type(last_name)
     newAccountPage.getPhoneNumberText().type(phone_number)
     newAccountPage.getPasswordText().type(password)
     newAccountPage.getConfirmPasswordText().type(password)
})

And('I submit the form', () => {
    newAccountPage.getAcceptanceCheckBox().check({ force: true }).should('be.checked')
    newAccountPage.getCreateAccountButton().click()
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


    subscriptionsPage.getAccountID().then( ($el)=> {
        cy.log("Member Number: " + $el.text());
    })
})

When('I Loggin in Storefront with valid credentials {string} and {string}', (user, password) => {
    cy.loginStorefront(user, password);
})

