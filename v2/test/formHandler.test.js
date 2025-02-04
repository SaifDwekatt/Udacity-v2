
const { handleSubmit } = require("../src/client/js/formHandler");

describe("Testing the formHandler function", () => {
    beforeAll(() => {
        document.body.innerHTML = `
            <form id="urlForm">
                <input id="name" value="https://example.com" />
                <button id="submitButton" type="submit">Submit</button>
            </form>
            <div id="results"></div>
        `;

        global.alert = jest.fn();
    });

    test("handleSubmit should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });

    test("handleSubmit should be a function", () => {
        expect(typeof handleSubmit).toBe("function");
    });

    test("handleSubmit should call fetch with correct parameters", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ score_tag: "P" }),
            })
        );

        const event = new Event("submit");
        document.getElementById("urlForm").dispatchEvent(event);

        await handleSubmit(event);

        expect(global.fetch).toHaveBeenCalledTimes(1);

        setTimeout(() => {
            expect(document.getElementById("results").innerHTML).toContain("Sentiment");
        }, 100);
    });
});
