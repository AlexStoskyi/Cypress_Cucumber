Feature: Burger Button

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button

  Scenario: User click on burger button
    When User click on burger button
    Then User should see the following items
