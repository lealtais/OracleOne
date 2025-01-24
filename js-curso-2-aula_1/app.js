let numberSecret =  generateRandomNumber();
// Retrieve the return value and store it in numberSecret

/*let titulo = document.querySelector('h1');

titulo.innerHTML = 'Secret number guessing game'; 
let  paragraph = document.querySelector('p')

paragraph.innerHTML = 'Try to guess the secret number I am thinking, of between 0 and 10! '; 
*/

function showText(tag, text){
    let element=document.querySelector(tag)
    element.innerHTML = text; 
}


showText('h1','Secret number guessing game'); 
showText('p','Try to guess the secret number I am thinking, of between 0 and 10!');
function checkGuess(){
    let guess = document.querySelector('input').value;
    console.log(guess == numberSecret)
}


function generateRandomNumber(){

   return parseInt(Math.random() * 10 + 1 );

}