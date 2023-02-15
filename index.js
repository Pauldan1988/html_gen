import inquirer from "inquirer"
// const inquirer = require("inquirer") 
import fs from "fs"

import generateHtml from "./lib/generatehtml.js"
import Manager from "./lib/Manager.js"
import Engineer from "./lib/Engineer.js";
import Employee from "./lib/Employee.js";
import Intern from "./lib/Intern.js";


const managerq = [
    {
        name: "name",
        message: "What is this managers name?",
        type: "input",
    },

    {
        name: "email",
        message: "What is the E-Mail address of this manager?",
        type: "input",
    },

    {
        name: "id",
        message: "What is this managers ID?",
        type: "input",
    },

    {
        name: "officeNumber",
        message: "What is this managers office Number?",
        type: "input",
    },
]

const engineerq = [
    {
        name: "name",
        message: "What is this engineers name?",
        type: "input",
    },

    {
        name: "email",
        message: "What is the E-Mail address of this engineer?",
        type: "input",
    },

    {
        name: "id",
        message: "What is this engineers ID?",
        type: "input",
    },

    {
        name: "github",
        message: "What is this engineers GitHub?",
        type: "input",
    },
]

const internq = [
    {
        name: "name",
        message: "What is this interns name?",
        type: "input",
    },

    {
        name: "email",
        message: "What is the E-Mail address of this intern?",
        type: "input",
    },

    {
        name: "id",
        message: "What is this interns ID?",
        type: "input",
    },

    {
        name: "school",
        message: "Where is this intern going to school?",
        type: "input",
    },
]

const addEmpq = [{
        name: "addEmp",
        message: "Would you like to add another employee?",
        type: "confirm",
}]

const empTypeq = [{
    name: "empType",
    message: "Which type of employee is this?",
    type: "list",
    choices: ["Engineer", "Intern"],    
}]

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
        let {addEmp} = await inquirer.prompt(addEmpq)
        while(addEmp) {
            let {empType} = await inquirer.prompt(empTypeq)
            if(empType == "Engineer") {
              let engineerEmp = await inquirer.prompt(engineerq)
              team.engineer.push(engineerEmp)
            } else {
              let internEmp = await inquirer.prompt(internq)
              team.interns.push(internEmp)  
            }

           addEmp = (await inquirer.prompt(addEmpq)).addEmp
        }
        const teamArray = [new Manager(team.manager.name, team.manager.id, team.manager.email, team.manager.officeNumber)]
        team.engineer.forEach(engineer => {
        const engineerArr = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        teamArray.push(engineerArr)
            //Create a new engineer instance
            //After created put it in teamArray
        })
        team.interns.forEach(intern => {
        const internArr = new Intern(intern.name, intern.id, intern.email, intern.school)
        teamArray.push(internArr)
        })
        fs.writeFile("./dist/index.html", generateHtml(teamArray),(error) => {
                
            if (error) {
                    console.log(error)
                } 
            })
        console.log(team)
    })



    
    //
    
    // [new Manager(team.manager.name, team.manager.id, team.manager.email, team.manager.officeNumber)]

// Create HTML file locally to develop to make sure it works properly

// Bootstrap CDN link, CSS file link
// Create function that generates the HTML(Outside of function generate card function)
// Pass class object. 







    //addEmp = await inquirer.prompt(add employee question) = true/false
//while loop (addEmp) {
//employeeType = await inquirer.prompt(which Employee types (e/i))
//if(employee type = e/i) 
//await inquirer.prompt(add e)
//
//addEmp = await inquirer.prompt(add employee)
//If type engineer. Prompt for engineer.
//team.interns/engineer.push(empinfo)
