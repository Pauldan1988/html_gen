import inquirer from "inquirer";
// const inquirer = require("inquirer") 
// const fs = require("fs")


// team = {
//     manager: {
//        ...
//     },
//     engineers: [
//        {...},
//        {...},
//     ],
//     interns: [
//        {...},
//        {...},
//     ]
//  }




const managerq = [
    {
        name: "managerName",
        message: "What is this managers name?",
        type: "input",
    },

    {
        name: "managerEmail",
        message: "What is the E-Mail address of this manager?",
        type: "input",
    },

    {
        name: "managerId",
        message: "What is this managers ID?",
        type: "input",
    },

    {
        name: "managerOfficeNum",
        message: "What is this managers office Number?",
        type: "input",
    },
]

const engineerq = [
    {
        name: "engineerName",
        message: "What is this engineers name?",
        type: "input",
    },

    {
        name: "engineerEmail",
        message: "What is the E-Mail address of this engineer?",
        type: "input",
    },

    {
        name: "engineerId",
        message: "What is this engineers ID?",
        type: "input",
    },

    {
        name: "engineerSchool",
        message: "What is this engineers GitHub?",
        type: "input",
    },
]

const internq = [
    {
        name: "internName",
        message: "What is this interns name?",
        type: "input",
    },

    {
        name: "internEmail",
        message: "What is the E-Mail address of this intern?",
        type: "input",
    },

    {
        name: "internId",
        message: "What is this interns ID?",
        type: "input",
    },

    {
        name: "internGithub",
        message: "Where is this intern going to school?",
        type: "input",
    },
]

//addEmp = await inquirer.prompt(add employee question) = true/false
//while loop (addEmp) {
//employeeType = await inquirer.prompt(which Employee types (e/i))
//if(employee type = e/i) 
//await inquirer.prompt(add e)
//
//addEmp = await inquirer.prompt(add employee)
//If type engineer. Prompt for engineer.
//team.interns/engineer.push(empinfo)

inquirer.prompt(managerq)
    .then(function (answer) {
        const team = {
            manager: answer,
            engineer: [],
            interns: [],
        }
        return team
    })
    .then(async function(team) {
        
    })