Feature: Cart page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button
    * Used click on add item to cart button
    * User click on cart button

  Scenario: User click on Check Out button
    When User click on Check Out button
    Then User should see Checkout: Your Information fields
