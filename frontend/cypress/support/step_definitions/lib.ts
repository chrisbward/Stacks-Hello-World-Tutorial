/// <reference types="Cypress" />
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
  path: path.resolve(__dirname, "../../../.env")
})

const baseUrl = Cypress.config().baseUrl;

import {
  Given,
  When,
  And,
  Then
} from "cypress-cucumber-preprocessor/steps";

 
/* step matchers*/
const I_OPEN_THE_HOMEPAGE = /^I visit the homepage$/;
const I_OPEN_THE_X_PAGE = /^I open the "([^"]*)" page$/;


/* steps */
Given(I_OPEN_THE_X_PAGE, (pageName:string) => {
  cy.visit(baseUrl + '/' + pageName);
});
  
Given(I_OPEN_THE_HOMEPAGE, () => {
  cy.visit(baseUrl + '/');
})