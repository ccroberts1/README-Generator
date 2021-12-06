// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
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
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a brief description of the project:",
    name: "description",
  },
  {
    type: "input",
    message: "What command should be used to install the dev environment?",
    name: "install",
    default: "npm i",
  },
  {
    type: "input",
    message: "Please provide instructions for usage:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "test",
  },
  {
    type: "list",
    message: "Please choose a license for the project:",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU GPLv3",
      "MIT",
      "Mozilla Public License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, callback) {
  fs.writeFile(`${fileName}.md`, data, callback);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const result = generateMarkdown(response);
    writeToFile("exampleREADME", result, (err) => {
      err
        ? console.log("Oops, something went wrong! Please try again")
        : console.log("Generating README...");
    });
  });
}

// TODO: Function call to initialize app
init();
