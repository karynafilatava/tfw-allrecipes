Feature: module 6 home task

    Background:
    Given I navigate to 'home' page

    @user
    Scenario: Sign in - Sign out
    	Then I should be unrecognized user
        When I sign in
        		#add correct email and password 
        		#another test will be with incorrect data!
        Then I should be signed in and see username
        When I sign out
        Then I should be recognized user

    @search
    Scenario: Global search - ingridient search
    	When I search 'banana, chocolate' globally
    	Then I should see 'banana, chocolate' results
    	When I search 'milk, ice' by ingridients
    	Then I should see 'banana, chocolate' results
    		And I should see 'milk, ice' ingridients results

    @browse
    Scenario: Choose recipe from results
        When I pick recipe from results
        Then I should see recipe name on page
            And I should see recipe name in title

