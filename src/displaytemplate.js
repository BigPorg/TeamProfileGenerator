const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const fs = require("fs");
// don't need inquirer here?

// class Template {
//     constructor(name, id, email, card) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.card = card;
//     }


// }
// card template
function generateHtml(engineers, interns, managers) {
    totalEngineers = engineers.length;
    totalInterns = interns.length;
    totalManagers = managers.length;
    cards = totalEngineers + totalInterns + totalManagers;

    return `<!DOCTYPE html>
    <html lang='en'>
    <head>
    <
    `

}

// const engineerCard = engineers => {
//     let card = "";
//     engineers.forEach(newEngineer => {
//         <div class="card-header">
//             <h3 class="card-title">${newEngineer.getName}Engineer</h3>
//         </div>

//     })
// }