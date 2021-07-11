class MyAccountMenu {

    getWelcomeText() {
        return cy.get('.welcome-title')
    }

    getAccountNameText() {
        return cy.get('[data-testid=qa-account-welcome-name]')
    }

    getSubcriptionsLink() {
        return cy.get('[data-testid]:contains("Subscriptions")')
    }
}

export default MyAccountMenu;