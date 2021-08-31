const inquirer = rquire("inquirer");
// const { ENGINE_METHOD_RSA } = require("constants");
const fs = require("fs");

// const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
// const employee = [];
const engineers = [];
const interns = [];
const managers = [];

const nextSteps = () => {
    if (nextSteps === "add an engineer") {
        addEngineer();
    } else if (nextSteps === "add an intern") {
        addIntern();
    } else {
        const data = template.generateHtml(managers, engineers, interns)
        writeToFile(data)
    }
};

// ask questions by making an array of objects
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",

        },
        {
            tpye: "input",
            message: "What is your employee ID?",
            name: "engineerID",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "engineerEMail",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "engineerGitHub",
        },
        {
            type: "input",
            message: "Is there anything else?",
            name: "nextSteps",
            choices: ["add an engineer", "add an intern", "finished building my team"],
        },
    ])
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",

        },
        {
            tpye: "input",
            message: "What is your employee ID?",
            name: "IntenID",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "internEMail",
        },
        {
            type: "input",
            message: "What school do you attend?",
            name: "internSchool",
        },
        {
            type: "input",
            message: "Is there anything else?",
            name: "nextSteps",
            choices: ["add an engineer", "add an intern", "finished building my team"],
        },
    ])
};

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",

        },
        {
            tpye: "input",
            message: "What is your employee ID?",
            name: "managerID",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "managerEMail",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
        },
        {
            type: "input",
            message: "Is there anything else?",
            name: "nextSteps",
            choices: ["add an engineer", "add an intern", "finished building my team"],
        },
    ])
};

// Engineer, Intern, Manager
const addEngineer = async () => {
    const answers = await promptEngineer();
    const { name, engineerID, engineerEMail, engineerGitHub, nextSteps } = answers;
    const engineer = new Engineer(name, engineerID, engineerEMail, engineerGitHub)
    engineers.push(engineer);
    nextSteps();
};

const addIntern = async () => {
    const answers = await promptIntern();
    const { name, internID, internEmail, internSchool, nextSteps } = answers;
    const intern = new Intern(name, internID, internEmail, internSchool);
    interns.push(intern);
    nextSteps();
};

const init = async => {
    const answers = await promptManager();
    const { name, managerID, managerEMail, officeNumber };
    const manager = new Manager(name, managerID, managerEMail, officeNumber);
    managers.push(manager);
    nextSteps();
};

function writeToFile(data) {
    fs.writeFile("./index.html", data, (err) =>
        err ? console.log(error(err)) : console.log('Success!')
    );
}

init();