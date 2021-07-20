class SideMenu {

    getAddressBookMenuOption() {

        return cy.xpath("//label[contains(text(),'Address Book')]"); 
    }

    getPaymentMethodMenuOption() {

        return cy.get("//label[contains(text(),'Payment Methods')]"); 
    }


    geSideMenuOption(option) {

        return cy.xpath("//label[contains(text(),'" + option + "')]"); 
    }

}

export default SideMenu;