
function showInLog(element){
    console.log(element)
}
function showGreentings() {
    console.log('HelloWorld')
}



showGreentings();

function showName(name) {
    console.log(name)
}

showName('Lua');

function double(number){

    return number*2;
   
}

double(2)


function gradeAverage(gradeOne,gradeSec,gradeThree){

    let gradeAverage = (gradeOne + gradeSec + gradeThree )/ 3; 

    return console.log(gradeAverage);

}

gradeAverage(10,10,10)

function whatNumberIsGreater(valueOne, valueSec){

        if (valueOne > valueSec){
            return console.log(`${valueOne} is greater than ${valueSec}`)

        }else if(valueSec> valueOne){
            return console.log(`${valueSec} is greater than ${valueOne}`)
        } else {
             return console.log(`${valueSec} is equal to ${valueOne}`)
        }
}

whatNumberIsGreater(4,1)

function numberSquad(number){

    return console.log(`The number ${number} squared is ` + number * number)

}

numberSquad(5)