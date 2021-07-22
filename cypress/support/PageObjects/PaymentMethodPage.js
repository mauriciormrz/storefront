class PaymentMethodPage {

    getAddNewPaymentMethodIcon() {

        return cy.get("[data-testid=qa-add-payment-button] > svg");
    }
    //span[contains(text(),'Add New Payment Method')]

    getAddNewPaymentMethodTypeSelect() {

        return cy.get("#paymentMethodType");
    }

    getFirstNameText() {

        return cy.get('#cardFirstName');
    }

    getLastNameText() {

        return cy.get('#cardLastName');
    }

    getCardNumberText() {

        return cy.get('#cardNumber');
    }


    getExpiryMonthText() {

        return cy.get('#expiryMonth');
    }

    getExpiryYearText() {

        return cy.get('#expiryYear');
    }

    getCardCVVText() {

        return cy.get('#cardCVV');
    }

    getDefaultPaymentText() {

        return cy.get('#setToDefaultPayment');
    }

    getBillingSameAsShippingText() {

        return cy.get('#billingSameAsShipping');
    }

    getSaveButton() {

        return cy.xpath("//button[contains(text(),'Save')]");
    }

}

export default PaymentMethodPage;

