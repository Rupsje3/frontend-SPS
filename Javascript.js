// Elementen selecteren
const computerKeuze = document.getElementById("computer-keuze");
const spelerKeuze = document.getElementById("speler-keuze");
const resultaat = document.getElementById("resultaat");
const steenKnop = document.getElementById("steen");
const papierKnop = document.getElementById("papier");
const schaarKnop = document.getElementById("schaar");

// Mogelijke keuzes
const keuzes = ["Steen", "Papier", "Schaar"];

// Functie om te spelen
function spelen(spelerKeuze) {
}

// Computer kiest willekeurig
let computerKeuze = keuzes[Math.floor(Math.random() * 3)];

// event listeners toevoegen aan knoppen
steenKnop.addEventListener("click", () => spelen("Steen"));
papierKnop.addEventListener("click", () => spelen("Papier"));
schaarKnop.addEventListener("click", () => spelen("Schaar")); 

if (spelerKeuze === computerKeuze) {
    resultaat.textContent = "Gelijkspel!";
}
else if ((spelerKeuze === "Steen" && computerKeuze === "Schaar") ||
         (spelerKeuze === "Papier" && computerKeuze === "Steen") ||
         (spelerKeuze === "Schaar" && computerKeuze === "Papier")) {
    resultaat.textContent = "Je wint!";
} else {
    resultaat.textContent = "De computer wint!";
}