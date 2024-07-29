Feature: login

  Scenario: User try to login with empty fields
    Given User open the login page
    When User click on submit button
    Then User should see error message with empty fields
