const Employee = require("./employee");

class engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
}
Engineer.prototype.getGithub = function () {
    return this.gitHub;
};

module.exports = Engineer;