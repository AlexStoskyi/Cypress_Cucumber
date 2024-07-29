import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Fake from '../../faker/fake';
import User_data from '../../../fixtures/user_data.json';
import Messages from '../../../fixtures/message.json';
import Endpoint from '../../../fixtures/endpoint.json';
import LoginPage from '../../pages/login.page';

Given('User open the login page', () => {
    cy.visit(Endpoint.baseUrl);
});

When('User enter valid credentials', () => {
    LoginPage.SingInTypeValue(User_data.userName, User_data.password)
    // cy.get('#user-name').type(User_data.userName);
    // cy.get('#password').type(User_data.password);
});

When('User enter invalid credentials', () => {
    LoginPage.SingInTypeValue(Fake.userName, Fake.password)
    // cy.get('#user-name').type(Fake.userName);
    // cy.get('#password').type(Fake.password);
});

When('User click on submit button', () => {
    LoginPage.elements.submitButton().click()
    // cy.get('#login-button').click();
});

Then('User should see error message with empty fields', () => {
    LoginPage.elements.errMessage().should('have.text', Messages.userErrorMess);
    // cy.get('.error-message-container.error').should('have.text', Messages.userErrorMess);
});

Then('User should see error message with invalid data', () => {
    LoginPage.elements.errMessage().should('have.text', Messages.userAndPassErrorMess);
    // cy.get('.error-message-container.error').should('have.text', Messages.userAndPassErrorMess);
});

Then('User should see the Main Page', () => {
    cy.url().should('include', Endpoint.inventory);

});
