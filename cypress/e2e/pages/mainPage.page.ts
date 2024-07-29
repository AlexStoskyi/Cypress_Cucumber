class MainPage {
    elements = {
        addToCartButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        burgerButton: () => cy.get('#react-burger-menu-btn'),
        inventoryButton: () => cy.get('#inventory_sidebar_link'),
        aboutButton: () => cy.get('#about_sidebar_link'),
        logoutButton: () => cy.get('#logout_sidebar_link'),
        resetButton: () => cy.get('#reset_sidebar_link'),
        inventoryList: () => cy.get('.inventory_list'),
        footer: () => cy.get('.footer')
    };

}
export default new MainPage();