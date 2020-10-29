// Raccolta Input
var RANDOM_NUMBERS = 16;
var MIN_BOUND = 1;
var MAX_BOUND = 100;
var ROUNDS = 84;


// Mines Generation
var mines = [];

while (mines.length < RANDOM_NUMBERS) {
  var actualRandomNumber = Math.floor(Math.random()*((MAX_BOUND+1)-MIN_BOUND) + MIN_BOUND);
   console.log(actualRandomNumber)
  if (!isNumberInArray(actualRandomNumber, mines)) {
    mines.push(actualRandomNumber);
  }
};


// Determinare il livello del Gioco
var difficulty = prompt("Segli la difficolta tra Facile,Medio,Difficile");
var Facile = 0;
var Medio = 1;
var Difficile = 2;

switch (difficulty) {
  case 0:
    MAX_BOUND = 100;
    break;
  case 1:
    MAX_BOUND = 80;
    break;
  case 2:
    MAX_BOUND = 50;
    break;
}


// Algoritmo del Gioco
var hasWon = false;
var isAlive = true;
var userChoices = [];

  //genero un ciclo while in quanto non so quanti giri dovrò eseguire
while (!hasWon && isAlive) {
  var actualUserChoice = parseInt(prompt("Inserisci numero tra" + MIN_BOUND + "-" + MAX_BOUND));

  if (isNumberInArray(actualUserChoice, userChoices)) {
    alert("HAI GIA' INSERITO IL NUMERO");
  } else {
    if (isNumberInArray(actualUserChoice, mines)) {
      isAlive = false;
    } else if (userChoices.length === ROUNDS) {
      hasWon = true;
    };
    userChoices.push(actualUserChoice)
  }
};


//Stampa degli Output --> Esito del Gioco
if (hasWon && isAlive) {
  document.getElementById('messaggio').innerHTML = "COMPLIMENTI HAI VINTO";
} else {
  document.getElementById('messaggio').innerHTML = "HAI PERSO";
}

document.getElementById('attempt').innerHTML += userChoices.length;
