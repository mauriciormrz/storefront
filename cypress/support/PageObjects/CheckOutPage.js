class CheckOutPage {


    //getShippingAddressChangeButton() {
    //    return cy.get('[data-testid="qa-ship-title"] > .px-0 > .checkout-change-button');
    //}

    //getShippingAddressContinueButton() {     
    //    return cy.get('[data-testid="qa-ship-continue"]')
    //}

    getShippingMethodChangeButton(){
        //cy.wait(3001);
        return cy.get('[data-testid="qa-shipping-method-title"] > .px-0 > .checkout-change-button');
    }

    getShippingMethodRadio(shipping_method) {

        return cy.get('[id*="' + shipping_method + '"]')
    }

    getShippingMethodContinueButton() {

        return cy.get('[data-testid="qa-ship-methods-continue"]');
    }

    getPaymentMethodRadio(payment_method) {

        switch (payment_method) {
            case 'Card ending with':
                return cy.xpath("(//*/span[contains(text(),'Expires')]/../../../../input)[1]");
            default:
                return cy.xpath("(//*/div[contains(text(),'" + payment_method + "')]/../../../../input)[1]");
        }
    }


    getStoreCreditContinueButton() {

        return  cy.get('[data-testid="qa-store-credit-continue"]')
    }

    getPaymentMethodChangeButton(){
        //(3001);
        return cy.get('.payment-change-button');
    }
   

    getPaymentMethodContinueButton() {

        cy.wait(1000);
        //return cy.get('button[type="submit"].px-5.py-2.add-payment-continue.list-specific-continue.text-uppercase.btn.btn-primary');
        return cy.get('#payment').contains('Continue');
    }


    getDonationCheckBox() {

        return cy.get('#donationCheckbox_1');
    }

    getBrandPartnerStringCheckBox() {

        return "input#brandPartnerCheckbox";
    }

    getBrandPartnerCheckBox() {

        return cy.get('#brandPartnerCheckbox');
    }


    getregisterAgreementCheckbox() {

        return cy.get('#registerAgreementCheckbox');
    }

    getSubmitOrderButton() {

        //(1000);
        //return cy.get('button[data-testid="qa-submit-order"][type="button"].w-100.submit-order-button.case-uppercase.btn-primary');
        return cy.get('[data-testid=qa-submit-order').not('.disabled');
    }


    getReferralText() {

        return cy.get('#referralId');
    }

    getReferralIdContinueButton() {

        return cy.get('button[data-testid="qa-referral-code-continue"][type="submit"].px-5.py-2.referral-code-continue.semi-solid-button.text-uppercase.btn.btn-primary');
    }
}

export default CheckOutPage;
