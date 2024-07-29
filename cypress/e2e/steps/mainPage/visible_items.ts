import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pages/mainPage.page'

Then('User should see the products on the main page', () => {
    MainPage.elements.inventoryList().should('be.visible');
});

When('User scroll down the page', () => {
    MainPage.elements.footer().scrollIntoView();
})

Then('User should see footers elements', () => {
    MainPage.elements.footer().should('be.visible');
})