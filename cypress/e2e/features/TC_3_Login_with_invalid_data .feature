Feature: login

  Background:
    Given User open the login page

  Scenario: User try to login with invalid data
    When User enter invalid credentials
    * User click on submit button
    Then User should see error message with invalid data
