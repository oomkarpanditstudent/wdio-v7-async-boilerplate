@smoke @regression
Feature: RMG - Registration Feature - Test Registration Journey - End to End Journey Tests
   As a new customer
   I want to test Successful Registration Journey on RMG Azure Headless CMS Website for both Personal and Business Users

Background: Re-setting up the Login page for run multiple positive scenarios
    Given I clear cache and cookies

 Scenario Outline: As a new customer (Personal or Business), I should be able to complete registration successfully on RMG Azure Headless CMS Website after filling all details.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    When  I enter email id as <email>
    And I proceed with continue on the first page of the registration journey
    And I enter title as <title> first name as <firstName> last name as <lastName> phone number as <phone> in your details section for registration
    And I enter an <address> for registration
    And I choose communication preferences <commPreference1> for registration
    And I choose communication preferences <commPreference2> for registration 
    And I choose communication preferences <commPreference3> for registration
    And I choose communication preferences <commPreference4> for registration 
    And I proceed with register option
    Then I should be registered successfully for email verification
    And  I should be able to go to Profile Step or Register Step via Progress Bar
        
    Examples:
      | email                  | title       | firstName        | lastName       | phone      | address | accountType |commPreference1|commPreference2|commPreference3|commPreference4|
      | oomtest1@gmail.com     | Mr          | Oomkar           | Pandit         | 07945454444|  UB7 9DP| personal    |email          | text          | telephone     | post           |
      | oomtest2@gmail.com     | Mr          | Oomkar           | Pandit Tester  | 07945454441|  UB7 9DP| business    |mobile         | blank         | blank         | blank          |

  Scenario Outline: As a new customer (Personal or Business), I should be able to complete registration successfully on RMG Azure Headless CMS Website without selecting customer preferences.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    When  I enter email id as <email>
    And I proceed with continue on the first page of the registration journey
    And I enter title as <title> first name as <firstName> last name as <lastName> phone number as <phone> in your details section for registration
    And I enter an <address> for registration
    And I proceed with register option
    Then I should be registered successfully for email verification
    And  I should be able to go to Profile Step or Register Step via Progress Bar
        
    Examples:
      | email                  | title       | firstName        | lastName       | phone      | address | accountType |
      | oomtest1@gmail.com     | Mr          | Oomkar           | Pandit         | 07945454444|  UB7 9DP| personal    |
      | oomtest2@gmail.com     | Mr          | Oomkar           | Pandit Tester  | 07945454441|  UB7 9DP| business    |

  Scenario Outline: As a new customer, I should be able to complete registration successfully on RMG Azure Headless CMS Website after selecting just one (1/4) customer preference.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    When  I enter email id as <email>
    And I proceed with continue on the first page of the registration journey
    And I enter title as <title> first name as <firstName> last name as <lastName> phone number as <phone> in your details section for registration
    And I enter an <address> for registration
    And I choose communication preferences <commPreference1> for registration 
    And I proceed with register option
    Then I should be registered successfully for email verification
    And  I should be able to go to Profile Step or Register Step via Progress Bar
        
    Examples:
      | email                  | title       | firstName        | lastName       | phone      | address | accountType |commPreference1 |
      | oomtest1@gmail.com     | Mr          | Oomkar           | Pandit         | 07945454444|  UB7 9DP| personal    |text            |      