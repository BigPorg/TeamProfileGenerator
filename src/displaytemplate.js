// const Employee = require("../lib/employee");
// const Engineer = require("../lib/engineer");
// const Intern = require("../lib/intern");
// const fs = require("fs");
// const inquirer = require("inquirer");

function generateTemplate(employee) {
    let attribute;
    if (employee.getRole() == "Manager") {
        attribute = `Office Number ${employee.getOfficeNumber()}`
    } else if (employee.getRole() == "Engineer") {
        attribute = `GitHub page is ${employee.getGithub()}`
    } else {
        attribute = `Employee attends ${employee.getSchool()}`
    }
    return `
    <div class="card">
    <div class="card-body">
        <h4 class="card-title">${employee.getName()}</h5>
        <h5 class="card-subtitle mb-2 ">${employee.getRole()} ${icon}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${employee.getId()}</li>
        <li class="list-group-item">Employee Email: ${employee.getEmail()} <a href="mailto:${employee.getEmail()}">Send Email</a> </li>
        <li class="list-group-item">${attr}</li>
    </ul>
    </div>\n`
}

function generateTeam(str) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <h1>Team Members</h1>
    </header>
    <div class="container">
        <div class="row">
            ${str}
        </div>
    </div>
</body>
</html>
    `
}

module.exports = {
    generateTemplate,
    generateTeam,
};