// Chiediamo all'utente la sua mail e verifichiamo se è presente nella lista delle mail accettate, successivamente generiamo due numeri casuali e confrontiamoli per enunciare il vincitore

const mailList = ["info@libero.it" , "info@gmail.com" , "tizio@libero.it" , "tizio@gmail.com" , "caio@libero.it" , "caio@gmail.com" , "index@libero.it" , "index@gmail.com"];

// Chiediamo all'utente la mail

const userMail = prompt("Qual è la tua mail?");

console.log(`Mail utente` , userMail);

// Verificare se la mail è presente nella lista

let mailVerified = false;

for (let i = 0; i < mailList.length; i++) {
    const thisMail = mailList[i];
    if (thisMail === userMail) {
        mailVerified = true;
    }

    console.log("Esito verifica mail:", mailVerified);

}

console.log("Esito finale:", mailVerified);


