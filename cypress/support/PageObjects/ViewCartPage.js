class ViewCartPage 
{
    getCheckOutButton() {
        return cy.get('[data-testid="qa-cart-checkout"]').not('.disabled');
    }  
}

export default ViewCartPage;