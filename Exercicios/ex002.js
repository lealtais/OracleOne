/*Ask the user what day of the week it is. If the answer is "Saturday" or  */

let day = prompt('What day is it today?')

if(day =='Saturday'| day =='Sunday' ){

    alert('Good weekend!')

}else{
    alert('Good Week! ')
}



let number = prompt('Chose a number!')

if (number < 0){
    alert('Wow, cool! Your number is negative.', number)
} else {
    alert(`Nice! your number ${number}, is positive `)
}


let score = prompt('What is your score?')

if(score >= 100){
    alert('WINNEEERR')
} else {
    alert('Do not be sad, try again until you win, i believe in you!')
}


let accountBalance = prompt('What is your account balance? ');

alert(`Your balance is ${accountBalance}`)


let name = prompt('Whatis your name?')

alert(`Welcome!${name}`)