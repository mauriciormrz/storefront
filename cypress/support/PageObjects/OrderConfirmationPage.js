class OrderConfirmationPage 
{

    getCongratsText() {
        cy.wait(2000)
        return cy.get('.order-congrats-text')
    }    

    getOrderNumberText() {
        return cy.get('[data-testid=qa-order-confirmation-id] > span')
    }

}

export default OrderConfirmationPage;

