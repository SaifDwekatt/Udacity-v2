import { checkForName } from './nameChecker';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById("name").value;

    if (!formText) {
        alert("Please enter a URL.");
        return;
    }

    checkForName(formText);

    try {
        const response = await fetch("http://localhost:8000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: formText }),
        });

        const data = await response.json();
        document.getElementById("results").innerHTML = `<p>Sentiment: ${data.score_tag}</p>`;
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to analyze text.");
    }
}

export { handleSubmit };
