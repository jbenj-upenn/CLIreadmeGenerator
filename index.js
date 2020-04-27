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
    name:"installation",
    message: "What dependencies are you using?"
},
{
    type: "input",
    name:"usage",
    message: "What will it be used for?"
},
{
    type: "list",
    name:"license",
    message: "What licensing does it use?",
    choices: ["Apache", "MIT", "ISC"]
},
{
    type: "input",
    name:"contributors",
    message: "Who has contributed to your project?"
},
{
    type: "input",
    name:"tests",
    message: "What is the command to run the test?"
},
{
    type: "input",
    name: "questions",
    message: "What's your github.com email?"
},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("You're that DUDE!");
      });
}

const askQuestions = async (questions) => {
    const answers = await inquirer.prompt(questions).catch(err => err)
    // console.log(answers);
    return answers;
}

const init = async () => {
   const userAnswers = await askQuestions(questions);
//    console.log(userAnswers);
   writeToFile("readme1.md", userAnswers)
        }

init();
