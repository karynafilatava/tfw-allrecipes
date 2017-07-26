Feature: sign-in-out
    As a user
    I can enter my account 

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
    	#When I search 'chocolate, milk' by ingridients
    	#Then I should see 'banana' results
    	#	And I should see 'chocolate, milk' ingridients results


