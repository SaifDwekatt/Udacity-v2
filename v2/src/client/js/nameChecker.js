function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

    if (names.includes(inputText)) {
        alert("Welcome, Captain!");
    } else {
        alert("Enter a valid captain name");
    }
}

module.exports = { checkForName };
