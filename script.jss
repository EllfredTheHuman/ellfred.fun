/* =========================================================
   ELLFRED.FUN
   Main Website JavaScript
========================================================= */


/* =========================================================
   PROJECT CARD HOVER
========================================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log("Welcome to ellfred.fun 👀");
console.log("You found the console. There's nothing here... yet.");
