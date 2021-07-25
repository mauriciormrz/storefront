Feature: Sign In
  As a customer,
  I want to login with email and password,
  So that I can use the app.

  Background:
    Given I am at the Login page

  Scenario Outline: Loggin with valid credentials
    When I fill in the account email field with the value "<user>"
    And I fill in the password field with the value "<password>"
    And I hit the login button
    Then I should be at the home page
    And I logout

    Examples:
      | user | password  |
      | 5010 | Password1 |
      #| 3907 | Password1 |


  Scenario: Loggin with invalid credentials
    When I fill in the account email field with the value "29014961"
    And I fill in the password field with the value "Password1"
    And I hit the login button
    Then the error message "Incorrect username or password" is displayed


  Scenario: Loggin by becoming a new member
    Given I am at the Become a Member page
    When I fill out the account creating form
      | first_name | last_name | phone_number | password  |
      | Mauricio   | Ramirez   | 3003206240   | Password1 |
    And I submit the form
    Then I should be at the home page
    And get his Member Number