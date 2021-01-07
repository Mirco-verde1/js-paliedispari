// ABBIAMO NECESSITA DI CAPIRE SE LA PAROLA INSERITA SIA PALINDROMA

function checkingPalindromeWord(inputWord){

  var checkingInputName = inputWord.split('').reverse();
  if (inputWord === checkingInputName) {
    return true;  //palindroma
  }
  else {
    return false;  // non palindroma
  }
};
;
// fine funzione
var inputWord = prompt('Scrivi la tua parola!')


// DA CHIARIRE IL FUNZIONAMENTO SU COME RICHIAMARE IN QUESTO CASO LA FUNZIONE



// SECONDO ESERCIZIO

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min); //Funzione con il quale genero numeri randomici
  return result;
}



function controlEqualOrOdd(num){ //funzione ccon il quale stabiliamo se la somma è pari o dispari
  if (num % 2 === 0) {
  return true;
 }else {
  return false;
}
};



var numberRandomComputer = (randomNumber(1, 5)); //Min e Max

 var insertNumber = prompt('Inserisci un numero da 1 a 5')  //Chiedo all'utente un numero e la sua scelta
 var numberInserted = parseInt(insertNumber)
 var equalOrOdd = prompt('Pari o Dispari ?')
 var sumRandomAndInput = ( numberInserted + numberRandomComputer ); //Somma numero inserito e numer randomico computer
 var flag = false;
 var flagSecond = false;



if (controlEqualOrOdd(sumRandomAndInput)) {
  alert('la  somma è pari')                     // Con l'if controllo se il numero sia pari o dispari e stampo il risultato
  flag = true;
}
else {
  flag = false;
  alert('La somma è dispari')
};



if (equalOrOdd.length = 4) {  //valuto la lunghezza della parola per capire se la scelta del'utente sia 'pari' o 'dispari'
  flagSecond = true;

}
if (equalOrOdd.length = 7 ) {
  flagSecond = false;
}else {

};


if (flagSecond && flag == true) {  // Se la scelta 'pari' o 'dispari' da parte dell'utente coincide con il risultato l'utente vince
  alert('Hai vinto')
}else if (flagSecond && flag == false) {
  alert('Dispari e vincente')
}else {
  alert('Hai perso')
}
