Feature: main actions
    As a user
    I can perform global search
    And ingridients search
    And pick recipe from results list

    Background:
    Given I navigate to 'home' page

    @search
    Scenario: Global search - ingridient search
    	When I search 'banana, chocolate' 'globally'
    	Then I should see 'banana, chocolate' results
    	When I search 'milk, ice' 'by ingridients'
    	Then I should see 'banana, chocolate' results
    		And I should see 'milk, ice' 'ingridients' results

    @browse
    Scenario: Choose recipe from results
        When I pick recipe from results
        Then I should see recipe name on page
            And I should see recipe name in title

