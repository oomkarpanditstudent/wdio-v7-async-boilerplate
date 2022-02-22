@smoke @regression
Feature: RMG - Registration Feature - Test Components on Registration Journey - Positive Tests

 Scenario: For registration journey, all the designed components are present on Page 1 i.e. account types, email and benefit list and continue button.

    Given I am on the registration page
    Then All the components as per design are available on page 1
    And  Progress Bar with three options is present

 Scenario Outline: For registration journey, all the designed component are present on Page 2 i.e. Register button and form input fields.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    When  I enter email id as <email>
    And I proceed with continue on the first page of the registration journey
    Then All the components as per design are available on page 2
    Examples:
      | accountType  |email           |
      | personal     |oomkar@yahoo.com|