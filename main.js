import inquirer from 'inquirer'

inquirer.prompt([
  {
    name: "greeting",
    message: "What is your name?",
    type: "input",
  },
  {
    name: "colors",
    message: "What's your favorite color?",
    type: "list",
    choices: ["black", "red", "blue", "yellow", "green", "pink"]
  },
  {
    name: "age",
    message: "How old are you?",
    type: "number",
  },
  {
    name: "hobbies",
    message: "What are your hobbies?",
    type: "checkbox",
    choices: ["reading", "sports", "cooking", "traveling", "painting", "other"]
  },
  {
    name: "confirm",
    message: "Are you sure?",
    type: "confirm",
  },
  {
    name: "password",
    message: "Enter your password",
    type: "password",
  }
])
.then(function (answers) {
  console.log(answers);
});