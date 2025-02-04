const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the server API page, you may access its services via the client app.");
});

app.post("/analyze", (req, res) => {
    res.json({ message: "Analysis complete" });
});

describe("Testing Express Server", () => {
    test("GET / should return a welcome message", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("This is the server API page, you may access its services via the client app.");
    });

    test("POST /analyze should return a response", async () => {
        const response = await request(app)
            .post("/analyze")
            .send({ text: "Hello world" })
            .set("Accept", "application/json");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: "Analysis complete" });
    });
});
