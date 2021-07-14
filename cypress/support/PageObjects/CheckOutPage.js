class CheckOutPage {


    getShippingAddressChangeButton() {
        return cy.get('[data-testid=qa-ship-title] > .px-0 > .change-button')
    }

    getShippingAddressContinueButton() {
        return cy.get('.mt-2 > [data-testid=qa-ship-continue]')
    }

    getShippingMethodRadio(shipping_method) {
        cy.wait(2000)
        return cy.get('[id*="' + shipping_method + '"]')
    }

    getShippingMethodChangeButton() {
        cy.wait(2000)
        return cy.get('[data-testid=qa-shipping-method-title] .change-button')
    }

    getShippingMethodContinueButton() {
        return cy.get('[data-testid=qa-ship-methods-continue]')
    }

    getPaymentMethodRadio(payment_method) {
        switch (payment_method) {
            case 'Card ending with':
                return cy.xpath("//*/span[contains(text(),'Expires')]/../../../../input")
            default:
                return cy.xpath("//*/div[contains(text(),'" + payment_method + "')]/../../../../input")
        }
    }

    getPaymentMethodContinueButton() {
        return cy.xpath("//*/div/button[@type='submit'][contains(@class,'px-5 py-2 add-payment-continue')]")
    }

    getDonationCheckBox() {
        return cy.get('#donationCheckbox_1')
    }

    getSubmitOrderButton() {
        cy.wait(2000)
        return cy.get('[data-testid=qa-submit-order]')
    }
}

export default CheckOutPage;
