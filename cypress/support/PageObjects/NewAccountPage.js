class NewAccountPage {

    getCreateAccountTitleText() {
        return cy.get('.create-account-title')
    }

    getEmailText() {
        return cy.get('#createEmail')
    }

    getFirstNameText() {
        //return cy.get('#firstName')
        return cy.xpath("//input[@id='firstName']")
    }

    getLastNameText() {
        return cy.get('#lastName')
    }

    getPhoneNumberText() {
        return cy.get('#phone')
    }

    getPasswordText() {
        return cy.get('#password')
    }

    getConfirmPasswordText() {
        return cy.get('#confirmPassword')
    }

    getAcceptanceCheckBox()
    {
        return cy.get('#acceptance')
    }

    getCreateAccountButton() {
        return cy.get('#create-account-btn')
    }




}

export default NewAccountPage;
/*
cy.get('#create-account-btn')
*/