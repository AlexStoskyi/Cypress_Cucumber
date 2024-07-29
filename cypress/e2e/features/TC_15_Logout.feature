Feature: login

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button

  @TC_1
  Scenario: TC_1_Login_with_valid_data
    When User click on burger button
    * User click on Logout button
    Then User should see Login Page
