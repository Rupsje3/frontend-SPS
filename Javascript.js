// selecting Elements
const computerKeuze = document.getElementById("computer-keuze");
const spelerKeuze = document.getElementById("speler-keuze");
const resultaat = document.getElementById("resultaat");
const steenKnop = document.getElementById("Steen");
const papierKnop = document.getElementById("Papier");
const schaarKnop = document.getElementById("Schaar");

// possible choices
const keuzes = ["Steen", "Papier", "Schaar"];

// Function to play the game
function spelen(spelerKeuze) {

    // Computer chooses randomly
    let computerKeuze = keuzes[Math.floor(Math.random() * 3)];

    // display result
    document.getElementById("speler-keuze").innerHTML = spelerKeuze;
    document.getElementById("computer-keuze").innerHTML = computerKeuze;

    let resultaat = "";

    // choose winner
    if (spelerKeuze === computerKeuze) {
        resultaat = "Gelijkspel!";
    }
    else if ((spelerKeuze === "Steen" && computerKeuze === "Schaar") ||
            (spelerKeuze === "Papier" && computerKeuze === "Steen") ||
            (spelerKeuze === "Schaar" && computerKeuze === "Papier")) {
        resultaat = "Je wint!";
    } else {
        resultaat = "Je verliest!";
    }

    console.log("Speler keuze: " + spelerKeuze);
    console.log("Computer keuze: " + computerKeuze);
    console.log("Resultaat: " + resultaat);
    document.getElementById("resultaat").innerHTML = resultaat;
}

// adding event listeners to buttons
buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const keuze = this.id;
        spelen(keuze);
    });
});