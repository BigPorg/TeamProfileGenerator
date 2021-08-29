class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getRole() {
        return this.constructor.name;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEMail() {
        return this.email;
    }
}

module.exports = Employee;