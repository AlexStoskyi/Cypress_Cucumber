Feature: Main Page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button

  Scenario: User add item to cart
    When Used click on add item to cart button
    Then User should see 1 near the cart
