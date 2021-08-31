const Manager = require("./lib/manager.js");

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("retun office number", () => {
            expect(new Manager("name", "id", "email", "officeNumber").getOfficeNumber()).toBe(officeNumber);
        })
    })
    describe("getRole", () => {
        it("role", () => {
            expect(new Manager ("name", "id", "email", "officeNumber").getRole()).toBe("Manager");
        })
    })
})