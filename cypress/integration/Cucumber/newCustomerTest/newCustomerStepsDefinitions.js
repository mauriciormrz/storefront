import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import MyAccountMenu from "../../../support/PageObjects/MyAccountMenu";
import HomePage from '../../../support/PageObjects/HomePage';
import SideLeftMenu from '../../../support/PageObjects/SideLeftMenu';
import AddressBookPage from '../../../support/PageObjects/AddressBookPage';
import PaymentMethodsPage from '../../../support/PageObjects/PaymentMethodsPage';

const myAccountMenu = new MyAccountMenu();
const homePage = new HomePage();
const sideLeftMenu = new SideLeftMenu();
const addressBookPage = new AddressBookPage();
const paymentMethodsPage = new PaymentMethodsPage();


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


Given('I am at the Login page', () => {

    cy.goToLoginPage();
})

Given('I am a new user with {string}, {string}, {string} and {string}', (first_name, last_name, phone_number, password) => {

    cy.goToRegisterPage();
    cy.fillOutTheAccountCreationForm(first_name, last_name, phone_number, password);
    cy.submitTheAccountCreationForm();
})


Given('I add a new adddress', (dataTable) => {

    homePage.getDropDownLink('my Account').dblclick();
    myAccountMenu.getSubcriptionsLink().click();

    //cy.xpath("(//*/button[contains(text(),'No Thanks')])[1]").should('be.visible').click();

    //sideLeftMenu.getAddressBookMenuOption().click();
    sideLeftMenu.geSideMenuOption('Address Book').click();

    dataTable.hashes().forEach((elem, index) => {

        addressBookPage.getAddNewAddressIcon().click();
        cy.addNewAddress(elem);

        cy.xpath("//div[contains(text(),'Address added successfully')]").should('be.visible');
        cy.get('#toastButton').click();

        //if (index === 0) {
        //    cy.xpath("(//*/button[contains(text(),'No Thanks')])[2]").click();
        //}

    });
})

Given('I add a new credit card', (dataTable) => {

    sideLeftMenu.geSideMenuOption('Payment Methods').click();
    paymentMethodsPage.getAddNewPaymentMethodIcon().should('be.visible').click();
    

    dataTable.hashes().forEach((elem, index) => {

        paymentMethodsPage.getAddNewPaymentMethodIcon().click();
        cy.addNewCreditCard(elem);
    });
})