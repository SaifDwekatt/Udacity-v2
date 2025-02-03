import { handleSubmit } from "../src/client/js/formHandler";

test("Function handleSubmit should be defined", () => {
    expect(handleSubmit).toBeDefined();
});

test("handleSubmit should call fetch with correct parameters", async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve({ score_tag: "P" }) })
    );

    document.body.innerHTML = `<input id="name" value="https://example.com" /><div id="results"></div>`;
    
    await handleSubmit(new Event("submit"));
    
    expect(document.getElementById("results").innerHTML).toContain("Sentiment");
});
