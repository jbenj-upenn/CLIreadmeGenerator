const inquirer = require('inquirer');
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")
const questions = [
{
    type: "input",
    name:"projectName",
    message: "What is your project name?"
},
{
    type: "input",
    name:"projectDescription",
    message: "What is your project description?"
},
{
    type: "input",
    name:"tableOfContents",
    message: "What is in your project?"
},
{
    type: "input",
    name:"installation",
    message: "What dependencies are you using?"
},
{
    type: "input",
    name:"usage",
    message: "What will it be used for?"
},
{
    type: "input",
    name:"license",
    message: "What licensing does it use?"
},
{
    type: "input",
    name:"contributors",
    message: "Who has contributed to your project?"
},
{
    type: "input",
    name:"contributors",
    message: "Who has contributed to your project?"
},
{
    type: "input",
    name:"contributors",
    message: "Who has contributed to your project?"
},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
}



function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile("log.txt", answers)
    })

}

init();
