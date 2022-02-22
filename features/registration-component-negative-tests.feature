@smoke @regression
Feature: RMG - Registration Feature - Test Components on Registration Journey - Negative Tests

 Scenario: For registration journey page 1, click continue without any input and user should not be allowed to progress.
 
    Given I am on the registration page
    When I proceed with continue on the first page of the registration journey
    Then I should not be allowed to progress from step 1 of the registration journey

 Scenario Outline: For registration journey page 1, click continue after selecting only account type radio button and leave email blank, user should not be allowed to progress.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    And   I proceed with continue on the first page of the registration journey
    Then  I should not be allowed to progress from step 1 of the registration journey
   Examples:
      | accountType  |
      | personal     |
      | business     |  

Scenario Outline: For registration journey page 1, click continue after entering email but not selecting any account type, user should not be allowed to progress.

    Given I am on the registration page
    When  I enter email id as <email>
    And   I proceed with continue on the first page of the registration journey
    Then  I should not be allowed to progress from step 1 of the registration journey
   Examples:
      | email            |
      | test@rmg.com     |

Scenario Outline: For registration journey page 2, click register without filling any details and then user should not be allowed to progress.
    Given I am on the registration page
    When  I choose <accountType> as account type to register
    And   I enter email id as <email>
    And   I proceed with continue on the first page of the registration journey
    And   I proceed with register option
    Then  I should not be allowed to progress from step 2 of the registration journey
    Examples:
      | accountType  |email           |
      | personal     |oomkar@yahoo.com|

Scenario Outline: For registration journey page 2, click register by missing only address on form and user should not be allowed to progress.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    And   I enter email id as <email>
    And   I proceed with continue on the first page of the registration journey
    And   I enter title as <title> first name as <firstName> last name as <lastName> phone number as <phone> in your details section for registration
    And   I proceed with register option
    Then  I should not be allowed to progress from step 2 of the registration journey
    Examples:
      | email                  | title       | firstName        | lastName       | phone      | address | accountType |
      | oomtest1@gmail.com     | Mr          | Oomkar           | Pandit         | 07945454444|  UB7 9DP| personal    |

Scenario Outline: For registration journey page 2, click register after missing one detail (each iteration will miss one unique field for each run) and user should not be allowed to progress.

    Given I am on the registration page
    When  I choose <accountType> as account type to register
    And   I enter email id as <email>
    And   I proceed with continue on the first page of the registration journey
    And   I enter title as <title> first name as <firstName> last name as <lastName> phone number as <phone> in your details section for registration
    And   I enter an <address> for registration
    And   I proceed with register option
    Then  I should not be allowed to progress from step 2 of the registration journey
    Examples:
      | email                  | title       | firstName        | lastName       | phone      | address | accountType |
      | oomtest1@gmail.com     | Mr          | Oomkar           | Pandit         | blank      |  UB7 9DP| personal    |
      | oomtest1@gmail.com     | blank       | Oomkar           | Pandit         | 07945454444|  UB7 9DP| personal    |
      | oomtest1@gmail.com     | Mrs         | blank            | Pandit         | 07945454444|  UB7 9DP| personal    |
      | oomtest1@gmail.com     | Dr          | Oomkar           | blank          | 07945454444|  UB7 9DP| personal    |
      | oomtest1@gmail.com     | Sir         | blank            | blank          | 07945454444|  UB7 9DP| personal    |
      | oomtest1@gmail.com     | Miss        | blank            | blank          | blank      |  UB7 9DP| personal    |