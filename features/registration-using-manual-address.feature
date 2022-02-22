@smoke @regression
Feature: RMG - Registration Feature - Test Registration Journey - Manually Enter Address
   As a new customer
   I want to test Successful Registration Journey on RMG Azure Headless CMS Website by entering address manually

 Scenario Outline: As a new customer, I should be able to complete registration successfully on RMG Azure Headless CMS Website by filling address manually.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    When  I enter email id as <email>
    And I proceed with continue on the first page of the registration journey
    And I enter title as <title> first name as <firstName> last name as <lastName> phone number as <phone> in your details section for registration
    And I choose communication preferences <commPreference1> for registration
    And I choose communication preferences <commPreference2> for registration 
    And I enter <property_number> <street> <city> <postcode> manually for registration
    And I proceed with register option
    Then I should be registered successfully for email verification
    Examples:
      | email                        | title       | firstName        | lastName       | phone      |   accountType |property_number| street        |city   |postcode |commPreference1|commPreference2|
      | oomtest1manual@gmail.com     | Mr          | Oomkar           | Pandit         | 07945454444|   personal    |10             |Downing Street |London |SW1A0AA  |text           |post           |