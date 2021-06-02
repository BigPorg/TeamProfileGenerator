const Engineer = require("./lib/engineer");

// do I need extend here?

describe("Engineer", () => {
    it("returns github username", () => {
        expect(new Employee("name", "id", "email", "github").getGithub()).toBe("name")
    })
})