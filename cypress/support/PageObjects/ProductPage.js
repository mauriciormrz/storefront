class ProductPage 
{ 
    
    getProductNameText() {
        return cy.get('[data-testid=qa-product-name]');
    }  

    getQuantityCtrl() {
        return cy.get("[data-testid=qa-product-quantity]");
    }  

    getAddCartButton() {
        return cy.get('[data-testid=qa-addcart]');
    }

    getViewCartButton() {
        return cy.get('[data-testid=qa-cartcheckout]');
    }
}

export default ProductPage;
