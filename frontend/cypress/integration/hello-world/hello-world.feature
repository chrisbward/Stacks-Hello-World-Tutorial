Feature: Hello World

  I want to have a basic hello-world example working tested end to end 
  so that new developers can hit the ground running with confidence.
  
  Scenario: First load - First time unauthenticated user
    Given I am an anonymous user    
    When I visit the homepage
    Then I should see a message from the Stacks chain that says "hello new user!" 
    And I should not see a 'save message' button
    And I should see a 'log in via Stacks' button

  Scenario: Signing in to Stacks, connecting a wallet
    Given I am an anonymous user
    And have the Stacks extension installed
    And I am currently on the homepage    
    When I press the 'log in via Stacks' button
    Then I should see a modal appear asking me to connect my wallet
  
  Scenario: Signing in to Stacks, connecting a wallet
    Given I am currently being invited to connect my wallet
    When I choose the first account
    Then I should see the dialog close
    And I should see that I am now logged in
  
  Scenario: Updating the message in storage, not the chain?
    Given I am an authenticated Stacks user
    When I enter the message "hello world"
    And I hit the 'save' button
    Then I should NOT see the from
    And I should see the message "hello world" on the page

  