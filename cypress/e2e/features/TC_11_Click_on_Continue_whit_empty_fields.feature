Feature: Cart page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button
    * Used click on add item to cart button
    * User click on cart button
    * User click on Check Out button

  Scenario: User click on Continue button whith empty fiedls
    When User click on Continue button
    Then User should see error message on Checkout: Your Information page
