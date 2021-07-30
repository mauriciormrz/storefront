class SignInPage {

    getSignInTitleText() {
        return cy.get('.signin-title')
    }

    getUserNameText() {
        return cy.get('#loginUsername');
    }

    getPasswordText() {
        return cy.get('#loginPassword');
    }

    getLoginButton() {
        return cy.get('#login-btn');
    }

    getCreateAccountButton() {
        return cy.get('#toggle-create-account-btn');
    }

    getAcceptCookiesStringButton() {
        return "#onetrust-accept-btn-handler";
    }

    getErrorMessageText() {
        return cy.get(':nth-child(1) > .mb-5 > #error-message-signin');
    }

}

export default SignInPage;