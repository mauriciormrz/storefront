class CheckOutPage {


    getShippingAddressChangeButton() {

        return cy.get('[data-testid=qa-ship-title] > .px-0 > .change-button');
    }

    getShippingAddressContinueButton() {

        return cy.get('.mt-2 > [data-testid=qa-ship-continue]')
    }

    getShippingMethodRadio(shipping_method) {

        return cy.get('[id*="' + shipping_method + '"]')
    }

    getShippingMethodChangeButton() {

        return cy.get('[data-testid=qa-shipping-method-title] .change-button');
    }

    getShippingMethodContinueButton() {

        return cy.get('[data-testid=qa-ship-methods-continue]');
    }

    getPaymentMethodRadio(payment_method) {

        switch (payment_method) {
            case 'Card ending with':
                return cy.xpath("(//*/span[contains(text(),'Expires')]/../../../../input)[1]");
            default:
                return cy.xpath("(//*/div[contains(text(),'" + payment_method + "')]/../../../../input)[1]");
        }
    }

    getPaymentMethodContinueButton() {

        return cy.get('button[type="submit"].px-5.py-2.add-payment-continue.list-specific-continue.text-uppercase.btn.btn-primary');
    }

    getDonationCheckBox() {

        return cy.get('#donationCheckbox_1');
    }

    getregisterAgreementCheckbox() {

        return cy.get('#registerAgreementCheckbox');
    }

    getSubmitOrderButton() {

        return cy.get('button[data-testid="qa-submit-order"][type="button"].w-100.submit-order-button.case-uppercase.btn-primary');
    }

    getReferralText() {

        return cy.get('#referralId');
    }

    getReferralIdContinueButton() {

        return cy.get('button[data-testid="qa-referral-code-continue"][type="submit"].px-5.py-2.referral-code-continue.semi-solid-button.text-uppercase.btn.btn-primary');
    }
}

export default CheckOutPage;
