const { checkForName } = require("./nameChecker");

function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById("name").value;

    if (!formText) {
        alert("Please enter a URL.");
        return;
    }

    checkForName(formText);

    fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: formText }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("results").innerHTML = `<p>Sentiment: ${data.score_tag}</p>`;
    })
    .catch(error => console.error("Error:", error));
}

module.exports = { handleSubmit };
