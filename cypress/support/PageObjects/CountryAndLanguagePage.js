class CountryAndLanguagePage {

    
    getCountrySelect() {

        return cy.get('#country');
    }

    getLanguageSelect() {

        return cy.get('#language');
    }

    getContinueButton() {
        return cy.get('#select-country-language-btn');
    }

    

}

export default CountryAndLanguagePage;