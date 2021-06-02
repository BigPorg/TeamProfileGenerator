const { isMainThread } = require("worker_threads");
const Intern = require("./lib/intern.js");

describe("Intern", () => {
    describe("getSchool", () => {
        it("return school name", () => {
            expect(new Intern("name", "id", "email", "school").getSchool()).toBe("school");
        })
    })
    describe("getRole", () => {
        it("role", () => {
            expect(new Intern ("name", "id", "email", "school").getRole()).toBe("Intern")
        })
    })
})