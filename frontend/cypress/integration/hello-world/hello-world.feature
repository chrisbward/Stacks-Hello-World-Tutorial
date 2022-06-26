Feature: Hello World

  I want to have a basic hello-world example working tested end to end 
  so that new developers can hit the ground running with confidence.
  
  Scenario: First load - The site has a message in the middle of the screen
    Given I visit the homepage
    And the url loads
    Then I should see a message from the Stacks chain that says "hello world" 
    

 