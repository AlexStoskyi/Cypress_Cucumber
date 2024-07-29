Feature: login

  Background:
    Given User open the login page

  @TC_1
  Scenario: TC_1_Login_with_valid_data
    When User enter valid credentials
    * User click on submit button
    Then User should see the Main Page
