class ViewCartPage 
{

    getCheckOutButton() {
        return cy.get('[data-testid=qa-cart-checkout]');
    }    
}

export default ViewCartPage;