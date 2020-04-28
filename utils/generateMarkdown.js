function generateMarkdown(data) {
  return `
# Project title
# ${data.projectName}

# Table of Contents
<!--ts-->
   * [${data.projectName}](#${data.projectName})
   * [Table of contents](#Stable-of-contents)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributing](#contributing)
  
<!--te-->

# Description
${data.projectDescription}

# Installation
${data.installation}

# Usage
${data.usage}

# License
${getLicense(data.license)}

# Contributors
${data.contributors}

# Github User Name?
${data.questions}

# Installation

# Usage

# License
${getLicense(data.license)}

# Contributing

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
