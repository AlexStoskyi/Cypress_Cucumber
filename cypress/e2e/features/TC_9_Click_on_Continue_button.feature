Feature: Shopping cart

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button
    * Used click on add item to cart button

  Scenario: User adds an item to the cart and returns to shopping
    When User click on cart button
    * User click on Continue Shopping button
    Then User should see 1 near the cart
