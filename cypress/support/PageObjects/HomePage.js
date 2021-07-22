class HomePage {

    getDropDownLink(option) {

        cy.wait(2000);
        return cy.xpath("//p[contains(text(),'" + option + "')]");
    }

    getSearchInput() {

        return cy.get('[data-testid=qa-search-input]');
    }
}

export default HomePage;

