// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Briefly describe your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions:",
    name: "install",
  },
  {
    type: "input",
    message: "What usage information would you like to provide?",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide test instructions:",
    name: "test",
  },
  {
    type: "list",
    message: "Please choose a license for the project:",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU AGPLv2",
      "GNU GPLv3",
      "GNU LGPLv3",
      "MIT",
      "Mozilla Public License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
