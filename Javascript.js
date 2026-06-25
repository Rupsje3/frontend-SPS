// geluiden
const winSound = document.querySelector("#winSound");
const loseSound = document.querySelector("#loseSound");
const drawSound = document.querySelector("#drawSound");


// selecting Elements
const computerKeuze = document.getElementById("computer-keuze");
const spelerKeuze = document.getElementById("speler-keuze");
const resultaat = document.getElementById("resultaat");
const steenKnop = document.getElementById("Steen");
const papierKnop = document.getElementById("Papier");
const schaarKnop = document.getElementById("Schaar");

// possible choices
const keuzes = ["Steen", "Papier", "Schaar"];

// Score elementen ophalen
const spelerScoreOutput = document.querySelector("#spelerScore");
const computerScoreOutput = document.querySelector("#computerScore");

// Win streak elementen ophalen
const winStreakOutput = document.querySelector("#winStreak");
const hoogsteStreakOutput = document.querySelector("#hoogsteStreak");

// Score bijhouden
let spelerScore = 0;
let computerScore = 0;
let winStreak = 0;
let hoogsteStreak = 0;

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
        drawSound.currentTime = 0; // Reset de audio naar het begin
        drawSound.play();
    }
    else if ((spelerKeuze === "Steen" && computerKeuze === "Schaar") ||
            (spelerKeuze === "Papier" && computerKeuze === "Steen") ||
            (spelerKeuze === "Schaar" && computerKeuze === "Papier")) {
        resultaat = "Je wint!";
        winSound.currentTime = 0;
        winSound.play();
        spelerScore++;
        spelerScoreOutput.innerHTML = spelerScore; //werkt score bij in de HTML
        winStreak++;
        winStreakOutput.innerHTML = winStreak;
        if (winStreak > hoogsteStreak) {
            hoogsteStreak = winStreak;
            hoogsteStreakOutput.innerHTML = hoogsteStreak;
        }
    } else {
        resultaat = "Je verliest!";
        loseSound.currentTime = 0;
        loseSound.play();
        computerScore++;
        computerScoreOutput.innerHTML = computerScore;
        winStreak = 0; // Reset de win streak
        winStreakOutput.innerHTML = winStreak;
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