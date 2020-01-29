const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee")

//one approach for asking team member info
const collectInputs = async (inputs = []) => {

    const prompts = [
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "list",
            message: "What type of employee would you like to add?",
            name: "employeeType",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "confirm",
            message: "Enter another employee?",
            name: "again",
            default: true
        }
    ];

    const {again, ...answers} = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
}
    
const main = async () =>{
    const inputs = await collectInputs();
    console.log(inputs)
}

main();
