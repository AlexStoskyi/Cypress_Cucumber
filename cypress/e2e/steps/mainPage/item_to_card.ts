import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Items from '../../../fixtures/items_name.json'
import MainPage from '../../pages/mainPage.page'

When('Used click on add item to cart button', () => {
    MainPage.elements.addToCartButton().click()
    // cy.get('#add-to-cart-sauce-labs-backpack').click()
})
Then('User should see 1 near the cart', () => {
    MainPage.elements.shoppingCartBadge().should('be.visible').and('have.text', Items.cartNumb)
    // cy.get('.shopping_cart_badge').should('be.visible').and('have.text', Items.cartNumb)
})