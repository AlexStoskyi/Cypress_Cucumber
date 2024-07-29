Feature: Main Page

  Background:
    Given User open the login page
    * User enter valid credentials
    * User click on submit button

  Scenario: User scrolls down the page to see the footer elements
    When User scroll down the page
    Then User should see footers elements
