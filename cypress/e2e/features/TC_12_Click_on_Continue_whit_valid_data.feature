Feature: Cart page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button
    * Used click on add item to cart button
    * User click on cart button
    * User click on Check Out button

  Scenario: User click on Continue button after fill in all valid data
    When User filled in the fields on the page Checkout: Your Information page
    When User click on Continue button
    Then User should see Checkout: Overview page
