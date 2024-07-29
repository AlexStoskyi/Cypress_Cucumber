import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Messages from '../../../fixtures/message.json';
import Fake from '../../faker/fake';
import LoginPage from '../../pages/login.page'
import CartPage from 'cypress/e2e/pages/catr.page';

When('User click on cart button', () => {
    CartPage.elements.shoppingCartButton().click();
});
When('User click on remove button', () => {
    CartPage.elements.removeButton().click();
});

Then('User should see empty cart', () => {
    CartPage.elements.cartList().should('not.have.text');
})

When('User click on Continue Shopping button', () => {
    CartPage.elements.continueShoppingButton().click();
})

When('User click on Check Out button', () => {
    CartPage.elements.checkoutButton().click()
})

Then('User should see Checkout: Your Information fields', () => {
    CartPage.elements.checkoutInfo().should('be.visible');
})

When('User click on Continue button', () => {
    CartPage.elements.continueButton().click();
})

Then('User should see error message on Checkout: Your Information page', () => {
    LoginPage.elements.errMessage().should('have.text', Messages.checkErrorMess)
})

When('User filled in the fields on the page Checkout: Your Information page', () => {
    CartPage.fillCheckoutInfo(Fake.firstName, Fake.lastName, Fake.postCode)
})

Then('User should see Checkout: Overview page', () => {
    CartPage.elements.title().should('have.text', Messages.checkOverview);
})

When('User click on Finish button', () => {
    CartPage.elements.finishButton().click();
})

Then('User should see a message about the successful purchase', () => {
    CartPage.elements.completeHeader().should('be.visible').and('have.text', Messages.successfulMess);
})

When('User click on Back Home button', () => {
    CartPage.elements.backToProductsButton().click()
})