import { handleSubmit } from './js/formHandler';

import './styles/base.css';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("urlForm");
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});

console.log("Client-side script loaded successfully!");
