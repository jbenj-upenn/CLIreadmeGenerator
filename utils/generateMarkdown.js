function generateMarkdown(data) {
  return `
# Project title
# ${data.projectName}

# Description
${data.projectDescription}
# Table of Contents

# Installation

# Usage

# License
${data.}
# Contributing

# Tests

# Questions

`;
}

module.exports = generateMarkdown;
