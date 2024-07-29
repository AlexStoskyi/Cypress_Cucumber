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
    * User click on Finish button

  Scenario: User click on Finish button
    When User click on Back Home button
    Then User should see the Main Page
