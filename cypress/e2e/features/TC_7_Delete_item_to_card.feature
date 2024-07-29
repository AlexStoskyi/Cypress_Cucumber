Feature: Main Page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button
    * Used click on add item to cart button

  Scenario: User delete item from cart
    When User click on cart button
    * User click on remove button
    Then User should see empty cart
