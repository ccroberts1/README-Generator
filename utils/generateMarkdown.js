// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/license-Apache--2.0-brightgreen";
  } else if (license === "GNU GPLv3") {
    return "https://img.shields.io/badge/license-GNU--GPLv3-yellow";
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-orange";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://img.shields.io/badge/license-Mozilla--Public--License2.0-red";
  } else if (license === "Boost Software License 1.0") {
    return "https://img.shields.io/badge/license-Boost--Software--License-blue";
  } else if (license === "The Unlicense") {
    return "https://img.shields.io/badge/license-Unlicense-lightgrey";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://choosealicense.com/licenses/mpl-2.0/";
  } else if (license === "Boost Software License 1.0") {
    return "https://choosealicense.com/licenses/bsl-1.0/";
  } else if (license === "The Unlicense") {
    return "https://choosealicense.com/licenses/unlicense/";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
[${license}](${renderLicenseLink(license)})`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](${renderLicenseBadge(data.license)})
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributing)
- [Tests](#tests)

## Installation
To install necessary dependencies, use the following command:
~~~
${data.install}
~~~
## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution}
## Tests
To run tests, run the following command:
~~~
${data.test}
~~~

## Questions
If you have any questions, please open an issue or reach out to me via email at <${
    data.email
  }>. You can find more of my work at [${data.username}](https://github.com/${
    data.username
  })
`;
}

module.exports = generateMarkdown;
