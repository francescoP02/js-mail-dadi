
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const generateBtn = document.getElementById("ms-gamebtn");

generateBtn.addEventListener("click", function () {
    // Genero il numero del giocatore
    const userDie = Math.floor(Math.random()*6 + 1);
    console.log(userDie);

    // Genero il numero del computer
    const computerDie = Math.floor(Math.random()*6 + 1);
    console.log(computerDie);

    // Confronto i numeri

    let result;

    if (userDie > computerDie) {
        result = "Il giocatore ha vinto";
    }
    else if (userDie < computerDie) {
        result = "Il computer ha vinto";
    }
    else result = "Pareggio"

    console.log(result);

    // Stampo i numeri dell'utente e del computer

    document.getElementById("userNumber").innerHTML = userDie;

    document.getElementById("computerNumber").innerHTML = computerDie;

    // Stampo il vincitore
    document.getElementById("result").innerHTML = result;
});




