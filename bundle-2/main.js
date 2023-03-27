/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

////////////MY CODE////////////////////


//  for (let i = 0; i < 5; i++) {
//      console.log(i);
//  }

 //1 - ci stampa numeri da 0 a 4
 //2- si minore invece di maggiore
 //3 - no


// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

////////////MY CODE////////////////////


 function addIfEven(num) {
     if (num % 2 === 0) {
         return num + 5;
     }
     return num;
    
 }
console.log(addIfEven(10));

//1 - ci aggiunge 5 se il numero e' pari
//2 - si 3 = perche' non e' assegnazione ma identita'
//3 - si bisognava richiamare la funzine fuori

// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

////////////MY CODE////////////////////


 function loopToFive() {
     for (let i = 0; i < 5; i++) {
         console.log(i);
     }
 }
 loopToFive();

 //1 - ci da i numeri da 0 a 4
 //2 - si ; invece di ,
 //3 - richiamare la funzione fuori



// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

////////////MY CODE////////////////////

 function displayEvenNumbers() {
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
     let evenNumbers = [];
     for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] % 2 === 0) {
             evenNumbers.push(numbers[i]);
         }
        
     }
      return evenNumbers;
 }
console.log(displayEvenNumbers()); ; // [2,4,6,8]

//1 - ci rida un array con i numeri pari
//2 - si ; dopo I++ e dopo la parentesi di if
//3 - si quando pushiamo bisogna mettere numbers altrimenti ci rida la posizione non il loro effettivo valore
//il return deve essere fuori dal ciclo for