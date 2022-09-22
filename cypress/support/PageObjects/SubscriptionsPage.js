class SubscriptionsPage 
{

    getAccountName() {
        return cy.get('[data-testid=qa-account-welcome-name]')
    }

    getAccountID() {
        return cy.get('[data-testid=qa-account-welcome-id] > .pl-1')
    }

    getCancelTourWindow(){
        return cy.get('.btn-outline-dark')
    }
}

export default SubscriptionsPage;
