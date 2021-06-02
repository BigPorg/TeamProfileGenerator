const { isMainThread } = require("worker_threads");
const Employee = require("./lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("returns employee name", () => {
            expect(new Employee("name", "id", "email").getName()).toBe("name")
        })
    })
    describe("getID", () => {
        it("returns employee ID", () => {
            expect(new Employee("name", "id", "email").getID()).toBe("id")
        })
    })
    describe("getEmail", () => {
        it("returns employee email", () => {
            expect(new Employee("name", "id", "email").getEmail()).toBe("email")
        })
    })
    describe("getRole", () => {
        it("returns employee role", () => {
            expect(new Employee("name", "id", "email").getRole()).toBe("Employee")
        })
    })
})