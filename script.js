let min = 1;
let max = 10;
let eingabe;
let randomNumber;

eingabe = Number(prompt(`Gebe eine Zahl zwischen ${min} und ${max} ein.`));
if (eingabe >= min && eingabe <= max) {
    randomNumber = getRandomNumber(min, max);
    vergleichen(eingabe, randomNumber);
}

function raten() {
    eingabe = Number(prompt(`Gebe eine Zahl zwischen ${min} und ${max} ein.`));
    if (eingabe >= min && eingabe <= max) {
        vergleichen(eingabe, randomNumber);
    }
}

function getRandomNumber(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vergleichen(eingabe, randomNumber) {
    if (eingabe === randomNumber) {
        alert("Treffer");
    } else if (eingabe > randomNumber) {
        alert("Die Zahl ist zu gross.");
        raten();
    } else {
        alert("Die Zahl ist zu klein.")
        raten();
    }
}