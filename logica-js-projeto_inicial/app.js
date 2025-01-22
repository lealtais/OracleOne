alert('Welcome'); 
let numberSecret = parseInt(Math.random() * 100 + 1 );  

let guessNumber= 0;
let attempts = 1;

while(guessNumber != numberSecret){

    guessNumber = prompt('Chose a number between 1 and 100');


    if(guessNumber== numberSecret) {
        break;

    } else {
        if(guessNumber > numberSecret ){
        alert(' The secret number is smaller')
        } else {
            alert('The secret number is greater');
        }

        attempts++;

    }
}

//tentativas é maior que um ? o que for colocado depos de "?" é o que vai acontecer caso as tentativas sejam maior que um  : se não > operador tenário - If attempts are greater than one, what comes after the '?' is what will happen; otherwise, the ':' will determine what happens. This is the ternary operator.

let wordAttempt = attempts > 1 ? 'attempts' : 'attempt'; 

alert(`Congrulations! You guessed the number, ${numberSecret} in ${attempts} ${wordAttempt}. `);

/*if (attempts > 1){
    alert(`Congrulations! You guessed the number, ${numberSecret} in ${attempts} attempts. `);
} else {
    alert(`Congrulations! You guessed the number, ${numberSecret} in ${attempts} attempt. `);
}*/