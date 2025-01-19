alert('Welcome'); 
let numberSecret = 4;  
console.log(numberSecret); 

let guessNumber = prompt('Chose a number between 1 and 30');


if(numberSecret == guessNumber) {

    alert(`Congrulations! You guessed the number, ${numberSecret}.`)
} else {

    alet('Ops! You are Wrong... :( Try it again')

}