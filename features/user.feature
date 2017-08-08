Feature: user actions
    As I user
    I can sign in
    And I can sign out

    Background:
    Given I navigate to 'home' page

    @user
    Scenario: Sign in - Sign out
    	Then I should be 'unrecognized' user
        When I sign in
        Then I should be signed in and see username
        When I sign out
        Then I should be 'recognized' user
