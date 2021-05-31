const Employee = require("./employee");

class engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = engineer;