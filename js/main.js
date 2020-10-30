//RACCOLTA INPUT
var MAX_NUM = 100;
var MIN_NUM = 1;
var NUM_MINE = 16;
var ROUND = 84;
var level = //prompt("Scegli il livello, tra 0, 1 e 2");

//Determinare Livello del GAME
switch (level) {

  case 0:
  MAX_NUM = 100;
    break;
  case 1:
    MAX_NUM = 80;
      break;
  case 2:
  MAX_NUM = 50;
      break;
};

//Generazione Mine (Array di numeri)
var mine = [];
console.log(mine);

   //ciclo while che genera le mine
while (mine.length < NUM_MINE){
  var randomNumbers = Math.floor(Math.random() * ((MAX_NUM + 1) - MIN_NUM) + MIN_NUM);
  if(!isInArray(randomNumbers, mine)){
    mine.push(randomNumbers);
  }
}

//Algoritmo del GAME
var userChoices = [];
var win = false;
var isAlive = true;
while (!win && isAlive){
  var numUtente = //parseInt(prompt("Inserisci un numero tra " + MIN_NUM + " - " + MAX_NUM));
  if(isInArray(numUtente, userChoices)){
    alert("Hai già inserito questo numero");
  }
  else if(isInArray(numUtente, mine)){
    isAlive = false;
    alert("Hai beccato una mina."+"HAI PERSO")
  }
  else if(userChoices.length === ROUND){
    win = true;
    alert("Hai disinnescato tutte le mine nel campo"+"COMPLIMENTI HAI VINTO!")
  }
userChoices.push(numUtente);
}

//Stampa degli OUTPUT --> esito del GAME
document.getElementById("result").innerHTML += userChoices.length;
