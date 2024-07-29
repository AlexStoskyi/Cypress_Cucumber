Feature: Main Page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button

  Scenario:
    Then User should see the products on the main page
