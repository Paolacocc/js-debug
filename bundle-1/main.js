/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
   // return message;
// }
// checkAge();

/////////MY CODE////////////

//
// function checkAge() {
//     const myAge = 32;
//      let message = '';
//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
 // return message;
// }
// checkAge();
// console.log(message);

//1 - controlla se hai piu di 18 anni.
//2 - si dovevamo mettere let a posto di const
//3 - si dovevamo dichiarare message fuori dalla funzione altrimentri non possiamo richiamarlo




// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

/////////MY CODE////////////

//  function printColorsNumber() {
//      const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//      console.log(`Nella mia palette ci sono ${colors.length} colori!`);
//  }
//  printColorsNumber();

 //1 - ci fa vedere quanti elementi ha l'array
 //2 - si length non lenght
 //3 - no




// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

/////////MY CODE////////////

//  function addNumbers() {
//      const userNumber = parseInt(prompt('Inserisci un numero')) ;
//      const total = userNumber + 12;
//      console.log(`Il risultato finale è ${total}`);
//  }
//  addNumbers();

 //1 - aggiunge 12 al numero che inserisce l'utente
 //2 - no
 //3 - si bisogna convertire il risultato dato dall'utente in un numero altrimenti viene letto come unaa stringa
 

// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

/////////MY CODE////////////

// function checkAccess() {
//          const addresses = [
//              'mymail@mail.com',
//              'yourmail@mail.com',
//              'hermail@mail.com',
//              'hismail@mail.com',
//          ];
//          const userEmail = prompt('Inserisci il tuo indirizzo email');
    
//          let grantAccess = false;
    
//          if (addresses.includes(userEmail)) {
//              grantAccess = true;
//          }
    
//          if (grantAccess === true) {
//              console.log('Accesso consentito!');
//          } else {
//              console.log('Accesso negato!');
//          }
//      }
//      checkAccess();

     //1 - controlla se l'email che inserisce l'utente e' presente nell'array
     //2 - si cerano le virgolette su true and false a riga 130 e 133
     //3 - no