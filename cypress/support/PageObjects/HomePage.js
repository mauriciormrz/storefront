class HomePage 
{

    getSignInLink() {
        cy.wait(2000)
        return cy.get('.menu-title')
    }

    getMyAccountLink() {
        cy.wait(2000)
        return cy.get('#dropdown-cutom> p')    }


    getSearchInput() {
        return cy.get('[data-testid=qa-search-input]')
    }
    
}

export default HomePage;

