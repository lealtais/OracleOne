/*let titulo = document.querySelector('h1');

titulo.innerHTML = 'Secret number guessing game'; 
let  paragraph = document.querySelector('p')

paragraph.innerHTML = 'Try to guess the secret number I am thinking, of between 0 and 10! '; 
*/


function showText(tag, element){

   let element = document.querySelector(tag);
   element.innerHTML = texto; 

}

showText('h1','Secret number guessing game'); 
showText('p','Try to guess the secret number I am thinking, of between 0 and 10!');


function checkGuess(){
    console.log('botão clicado');
}
