class NewAccountPage {

    getCreateAccountTitleText() {
        return cy.get('.create-account-title');
    }

    getEmailText() {
        return cy.get('#createEmail');
    }

    getFirstNameText() {
        return cy.get('#firstName');
    }

    getLastNameText() {
        return cy.get('#lastName');
    }

    getPhoneNumberText() {
        return cy.get('#phone');
    }

    getPasswordText() {
        return cy.get('#password');
    }

    getConfirmPasswordText() {
        return cy.get('#confirmPassword');
    }

    getReferrerText() {
        return cy.get('#referrer');
    }

    getTermAndConditionsCheckBox() {
        return cy.get('#termsAndConditions');
    }

    getPrivacyPolicyCheckBox() {
        return cy.get('#privacyPolicy');
    }

    getCreateAccountButton() {
        return cy.get('#create-account-btn');
    }


}

export default NewAccountPage;
