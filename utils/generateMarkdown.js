function generateMarkdown(data) {
  return `
# Project title
# ${data.projectName}

# Description
${data.projectDescription}

# Table of Contents
<!--ts-->
   * [${data.projectName}](#${data.projectName})
   * [Table of contents](#table-of-contents)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
<!--te-->

# Installation

# Usage

# License
${getLicense(data.license)}

# Contributing

# Tests

# Questions

`;
}

const getLicense = (license) => {
 let chosenLicense
  if(license === "MIT") {
    chosenLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(license === "ISC"){
    chosenLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }else{
    chosenLicense = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
return chosenLicense;
}

module.exports = generateMarkdown;
