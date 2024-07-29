import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Items from '../../../fixtures/items_name.json'
import Endpoint from '../../../fixtures/endpoint.json'
import MainPage from '../../pages/mainPage.page'


When('User click on burger button', () => {
    MainPage.elements.burgerButton().click();
    // cy.get('#react-burger-menu-btn').click();
});

Then('User should see the following items', () => {
    MainPage.elements.inventoryButton().should('have.text', Items.all);
    MainPage.elements.aboutButton().should('have.text', Items.about);
    MainPage.elements.logoutButton().should('have.text', Items.logout);
    MainPage.elements.resetButton().should('have.text', Items.reset);
    // cy.get('#inventory_sidebar_link').should('have.text', Items.all);
    // cy.get('#about_sidebar_link').should('have.text', Items.about);
    // cy.get('#logout_sidebar_link').should('have.text', Items.logout);
    // cy.get('#reset_sidebar_link').should('have.text', Items.reset);
})

When('User click on Logout button', () => {
    MainPage.elements.logoutButton().click();
    // cy.get('#logout_sidebar_link').click();
})

Then('User should see Login Page', () => {
    cy.url().should('include', Endpoint.baseUrl);
})