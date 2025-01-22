function exercise1(){

alert('Welcome to our website!')

    let name = prompt('What is tour name?'); 
    let age = prompt('How old are you?'); 
    let numberOfSales = 50;
    let availableBalance = 1000;


    messageOfError = "Error: Fill in all the fields";

    alert(messageOfError);

    if(age >= 18){

        alert('You can got a Driver License!');

    }

}

/*Create a counter that starts at 1 and goes up to 10 using a while loop. Display each number*/
function exercise2(){
let contador = 1;

    while(contador <= 10){
        console.log(contador)
        contador++;
    }
}

/*Create a counter that starts at 10 and goes down to 0 using a while loop. Display each number. */

function exercise3(){
    contador = 10;

    while(contador >=0){
        console.log(contador)
        contador--;
    }
}

/*Create a countdown program. Ask the user for a number and count from that number down to 0, using a while loop in the browser console.*/

function exercise4(){

    let numberMax = prompt('Choose a number!')

    while(numberMax >= 0 ){
        console.log(numberMax)
        numberMax--;
    }
}

/*Create a counting-up program. Ask the user for a number and count from 0 to that number, using a while loop in the browser console. */

function exercise5(){

aux = 0; 
numberMax = prompt('Chose a number!')

    while(aux <= numberMax){
        console.log(aux)
        aux++; 
    }
}

function exercise6(){

    console.log('Welcome')

}

function exercise7(){
    let name = 'Tais'; 
    console.log(`Bem vinda, ${name}`)
}
function exercise8(){
    let name = 'Tais'
    alert(`Olá, ${name}`)
}
function exercise9(){

    let language = prompt('What is your programing language you like the most?')

    console.log(language)

}
function exercise10(){

    let valueOne = parseInt(prompt ('Chose a number: '))
    let valueSec = parseInt(prompt ('Another One: '))

    let result = valueOne + valueSec; 
    
    console.log(`The sum of ${valueOne} and ${valueSec} is ${result}`)

}
function exercise11(){

    let valueOne = parseInt(prompt ('Chose a number: '))
    let valueSec = parseInt(prompt ('Another One: '))

    let result = valueOne - valueSec; 
    
    console.log(`The diference between ${valueOne} and ${valueSec} is ${result}`)
}
function exercise12(){

    let age = prompt('Hoe old are you?')

    if(age >= 18){
        console.log('You are adult ')
    } else {
        console.log('You are minor! ')
    }

}
function exercise13(){

    let number = prompt('Chose a number')

    if(number < 0){
        alert('Negative')
    } else {
        alert('Positive')
    }

}
function exercise14(){

    let number = 1;

    while(number <= 10){
        console.log(number)
        number++;
    }

}
function exercise15(){
    let grade = prompt('What is your grade?')

    if (grade > 7){
        alert('Congratulations, You pass')
    } else{
        alert('Sorry, you fail, maybe nest year!')
    }


}
function exercise16(){
    
    let numberSecret = Math.random();

    console.log(numberSecret)

}


function exercise17(){

    let numberSecret = parseInt(Math.random()* 10 ) + 1;

    console.log(numberSecret)

}
function exercise18(){

    let numberSecret = parseInt(Math.random()* 1000 ) + 1;

    console.log(numberSecret)

}