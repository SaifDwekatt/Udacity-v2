var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});

// POST Route for NLP Analysis
app.post('/analyze', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text input is required" });
    }

    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${encodeURIComponent(text)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error processing NLP request" });
    }
});

// Start Server
app.listen(8000, function () {
    console.log('Server running on port 8000!');
});
