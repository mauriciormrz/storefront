import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import MyAccountMenu from "../../../support/PageObjects/MyAccountMenu";
import HomePage from '../../../support/PageObjects/HomePage';
import SideLeftMenu from '../../../support/PageObjects/SideLeftMenu';
import AddressBookPage from '../../../support/PageObjects/AddressBookPage';
import PaymentMethodPage from "../../../support/PageObjects/PaymentMethodPage";


const myAccountMenu = new MyAccountMenu();
const homePage = new HomePage();
const sideLeftMenu = new SideLeftMenu();
const addressBookPage = new AddressBookPage();
const paymentMethodPage = new PaymentMethodPage();


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


Given('I am at the Login page', () => {

    cy.goToLoginPage();
})

Given('I am a new customer with {string}, {string}, {string} and {string}', (first_name, last_name, phone_number, password) => {

    cy.goToRegisterPage();
    cy.fillOutTheAccountCreationForm(first_name, last_name, phone_number, password);
    cy.submitTheAccountCreationForm();
})


Given('I add a new adddress', (dataTable) => {

    cy.welComeHomePage();

    myAccountMenu.getSubcriptionsLink().trigger('mouseover').click();
    sideLeftMenu.geSideMenuOption('Address Book').should('be.visible').click();

    dataTable.hashes().forEach((elem) => {

        addressBookPage.getAddNewAddressIcon().should('be.visible').click();
        cy.addNewAddress(elem);

        cy.toastMessage('Address added successfully');
    });
})

Given('I add a new credit card', (dataTable) => {

    sideLeftMenu.geSideMenuOption('Payment Methods').should('be.visible').click();

    dataTable.hashes().forEach((elem) => {

        paymentMethodPage.getAddNewPaymentMethodIcon().click();
        cy.addNewCreditCard(elem);

        cy.toastMessage('Payment added successfully');
    });
})

When('I place a one-time first order with {string}, {string}, {string} and {string}', (shipping_method, payment_method, donation, referral_id, dataTable) => {

    cy.addingItemsToCart(dataTable);
    
    cy.fillOutTheCheckoutForm(shipping_method, payment_method, referral_id);
    cy.submitOrder(donation);
})

And('I should see the order confirmation {string}', (congrats_message) => {

     cy.seeTheOrderConfirmation(congrats_message);
})
