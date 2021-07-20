class AddressBookPage {

    getAddNewAddressIcon() {

        return cy.get('.mx-1 > svg');
    }

    getFirstNameText() {

        return cy.get('#firstName');
    }

    getLastNameText() {

        return cy.get('#lastName');
    }

    getAddressLine1Text() {

        return cy.get('#addressLine1');
    }

    getAddressLine2Text() {

        return cy.get('#addressLine2');
    }

    getCityText() {

        return cy.get('#city');
    }

    getStateSelect() {

        return cy.get('#stateList');
    }

    getCountrySelect() {

        return cy.get('#country');
    }

    getZipCodeText() {

        return cy.get('#zip');
    }

    getPhoneNumberText() {

        return cy.get('#phone');
    }

    getDefaultAddressCheckBox() {

        return cy.get('#setDefaultAddress');
    }

    getSaveButton() {

        return cy.get('[data-testid=qa-add-address]');
    }

}

export default AddressBookPage;
