class HomePage {

    getDropDownLink(option) {

        return cy.xpath("//p[contains(text(),'" + option + "')]");
    }

    getSearchInput() {

        return cy.get('[data-testid=qa-search-input]');
    }
}

export default HomePage;


