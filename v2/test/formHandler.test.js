const { handleSubmit } = require("../src/client/js/formHandler");

describe("Testing the formHandler function", () => {
    test("handleSubmit should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });

    test("handleSubmit should be a function", () => {
        expect(typeof handleSubmit).toBe("function");
    });
});
