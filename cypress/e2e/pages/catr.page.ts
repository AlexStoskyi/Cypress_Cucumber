class CartPage {
    elements = {
        shoppingCartButton: () => cy.get('.shopping_cart_link'),
        removeButton: () => cy.get('#remove-sauce-labs-backpack'),
        cartList: () => cy.get('.cart_list'),
        continueShoppingButton: () => cy.get('#continue-shopping'),
        checkoutButton: () => cy.get('#checkout'),
        checkoutInfo: () => cy.get('.checkout_info'),
        continueButton: () => cy.get('#continue'),
        firstName: () => cy.get('#first-name'),
        lastName: () => cy.get('#last-name'),
        postCode: () => cy.get('#postal-code'),
        title: () => cy.get('.title'),
        finishButton: () => cy.get('#finish'),
        completeHeader: () => cy.get('.complete-header'),
        backToProductsButton: () => cy.get('#back-to-products')
    };

    fillCheckoutInfo(firstName: string, lastName: string, postCode) {
        this.elements.firstName().clear().type(firstName);
        this.elements.lastName().clear().type(lastName);
        this.elements.postCode().clear().type(postCode)
    }

}
export default new CartPage();