const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "employeeType",
        choices: ["Manager", "Engineer", "Intern", "None, I'm done!"]
    }
]);
