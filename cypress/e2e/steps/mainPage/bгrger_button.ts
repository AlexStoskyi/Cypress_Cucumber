import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Items from '../../../fixtures/items_name.json'
import Endpoint from '../../../fixtures/endpoint.json'
import MainPage from '../../pages/mainPage.page'


When('User click on burger button', () => {
    MainPage.elements.burgerButton().click();
});

Then('User should see the following items', () => {
    MainPage.elements.inventoryButton().should('have.text', Items.all);
    MainPage.elements.aboutButton().should('have.text', Items.about);
    MainPage.elements.logoutButton().should('have.text', Items.logout);
    MainPage.elements.resetButton().should('have.text', Items.reset);
})

When('User click on Logout button', () => {
    MainPage.elements.logoutButton().click();
})

Then('User should see Login Page', () => {
    cy.url().should('include', Endpoint.baseUrl);
})