class HomePage {

    getDropDownLink(option) {
        
        cy.wait(1001);
        return cy.get('#dropdown-cutom >p')
    }


    getSearchInput() {

        return cy.get('[data-testid=qa-search-input]');
    }
}

export default HomePage;


