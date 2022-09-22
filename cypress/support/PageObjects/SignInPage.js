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

    getContinueButton() {
        return cy.get('#continue-btn');
    }

    getLoginButton() {
        return cy.get('#login-btn');
    }

    getCreateAccountButton() {
        return cy.get('#toggle-create-account-btn');
    }

    getAcceptCookiesStringButton() {
        return "button#onetrust-accept-btn-handler";
    }

    getErrorMessageText() {
        return cy.xpath("//div[contains(text(),'Incorrect username or password')]");
    }

    getAcceptCookiesButton() {
        return cy.get('button#onetrust-accept-btn-handler');
    }
    

}

export default SignInPage;