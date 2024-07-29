class LoginPage {
    elements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        submitButton: () => cy.get('#login-button'),
        errMessage: () => cy.get(".error-message-container.error"),
    };

    SingInTypeValue(userName: string, password: string) {
        this.elements.userNameInput().clear().type(userName);
        this.elements.passwordInput().clear().type(password);
    }


}
export default new LoginPage();