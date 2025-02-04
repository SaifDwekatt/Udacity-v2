const { checkForName } = require("../src/client/js/nameChecker");

describe("Testing the nameChecker function", () => {
    test("checkForName should be defined", () => {
        expect(checkForName).toBeDefined();
    });

    test("checkForName should be a function", () => {
        expect(typeof checkForName).toBe("function");
    });

    test("checkForName should recognize valid names", () => {
        global.alert = jest.fn();
        checkForName("Picard");
        expect(global.alert).toHaveBeenCalledWith("Welcome, Captain!");
    });

    test("checkForName should reject invalid names", () => {
        global.alert = jest.fn();
        checkForName("NotACaptain");
        expect(global.alert).toHaveBeenCalledWith("Enter a valid captain name");
    });
});
