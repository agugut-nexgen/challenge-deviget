# SDET-test
## Challenge
Create pilot Java test framework for testing NASA's open API.

NASA has an open API: https://api.nasa.gov/index.html#getting-started. It grants access to different features e.g: Astronomy Picture of the Day, Mars Rover Photos, etc.

We would like to test different scenarios that the API offers:
1. Retrieve the first 10 Mars photos made by "Curiosity" on 1000 Martian sol.
2. Retrieve the first 10 Mars photos made by "Curiosity" on Earth date equal to 1000 Martian sol.
3. Retrieve and compare the first 10 Mars photos made by "Curiosity" on 1000 sol and on Earth date equal to 1000 Martian sol.
4. Validate that the amounts of pictures that each "Curiosity" camera took on 1000 Mars sol is not greater than 10 times the amount taken by other cameras on the same date.

## Instructions
You will need to fork the repository and build the solution in Github **publicly**. Once you are finished, let HR know and share a link to your fork or a Zip file with your solution and the URL of the repository.

Implementation deadline is 1 week. Please let us know the time that you spent to achieve the task.


## Installation
Install nvm (recommended) https://github.com/creationix/nvm

Install node v10 nvm install 10

Install dependencies npm install Note: You will be using cypress 6.2.0 version and also typescript 4.1.3 version

Note: If you have to install cypress locally you need to run `npm install cypress --save-dev npm install --save-dev typescript`

## Open Cypress Test Runner
To open the cypress test runner application runs `npx cypress open`

It can be used to try tests for debugging purpose or in order to follow step by step the specs executions as it is wanted

## Execute tests from command line
In order to execute the complete test suite only should do npx cypress run This line will run with electron browser, but some issues were detected using electron, so is better run with the following line that is a headless version of chrome `npx cypress run --browser chrome --headless`

## Execute tests from dockerfile
To run test from dockerfile you have to run to build the container `docker build -t api-nasa-challenge` . This build run test with chrome headless Once that you build the container yo can re run the test with `docker run -t api-nasa-challenge run --browser chrome --headless` Note: We run with chrome headless because there is a bug with electron https://github.com/cypress-io/cypress/issues/5965 https://docs.cypress.io/guides/references/error-messages.html#The-Chromium-Renderer-process-just-crashed