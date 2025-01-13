"use strict";
const toggleButton = document.querySelector(".toggleButton");
const skills = document.querySelector(".skills");
toggleButton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        toggleButton.innerText = "Hide Skills";
    }
    else {
        skills.style.display = "none";
        toggleButton.innerText = "Show Skills";
    }
});
skills.style.display = "none";
