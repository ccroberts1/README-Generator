// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
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
    message: "Please provide step-by-step instructions for installation:",
    name: "install",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, callback) {
  fs.writeFile(`${fileName}.md`, data, callback);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const result = `# ${response.title}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [How to Contribute](#contributing)
- [Tests](#tests)

## Installation
${response.install}
## Usage
${response.usage}
## Credits

## License
${response.license}
## Badges

## Contributing
${response.contribution}
## Tests
${response.test}`;
    writeToFile("examplereadme", result, (err) => {
      err
        ? console.log("Oops, something went wrong! Please try again")
        : console.log("Success!");
    });
  });
}

// TODO: Function call to initialize app
init();
