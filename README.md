# Overview

This UI testing framework design to test CUCUS challenge. Framework design using NodeJS, TypeScript and Cypress.

Folder Structure

- fixtures - Contains external static data that we want to use in the test files.
- e2e - Contains Page Object Model which all the page objects and test cases.
- pages - Under e2e, pages folder contains all page objects for each pages.
- test - Under e2e, test folder contains all the design tests according to testcases.

# Getting Started

Make sure you have NodeJS installed.

- git clone [git@github.com:ArunaMendis/Cocus_Challenge.git](https://github.com/ArunaMendis/Cocus_Challenge.git)
- cd Cocus_Challenge
- npm install
- To execute all the tests; 
  - npm test
- To manually execute the test in Browser;
  - npm cypress open
  - Click E2E Testing in "Welcome to Cypress"
  - Click Chrome Browser
  - Click Start E2E Testing in Chrome button
  - Click swaglabs.cy.ts
