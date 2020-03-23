var inquirer = require("inquirer");
var api = require("./utilities/api");
var generatemarkdown = require("./utilities/generatemd");

inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub user name?"
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "What is a short description of your project?"
    },
    {
      type: "input",
      name: "installation",
      message: "What command do you run to install dependencies?",
      default: "npm install"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using this project?"
    },
    {
      type: "list",
      name: "license",
      message: "What is your project's license?",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD-3", "None"]
    },
    {
      type: "input",
      name: "contributing",
      message: "How can the user contribute to the project?"
    },
    {
      type: "input",
      name: "tests",
      message: "What command is used to run tests?",
      default: "npm test"
    }
  ])
  .then(answers => {
    api(answers.github).then(function(data) {
      console.log(data.data);
      var answerswithgithub = {
        ...answers,
        email: data.data.email,
        avatar_url: data.data.avatar_url
      };
      generatemarkdown(answerswithgithub, "testfile.md");
    });
  })
  .catch(error => {
    console.log(error);
  });
