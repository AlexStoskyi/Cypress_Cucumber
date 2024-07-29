Feature: Cart page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button
    * Used click on add item to cart button
    * User click on cart button
    * User click on Check Out button
    * User filled in the fields on the page Checkout: Your Information page
    * User click on Continue button

  Scenario: User click on Finish button
    When User click on Finish button
    Then User should see a message about the successful purchase
