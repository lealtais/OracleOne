
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


function calculeBMI(weight,height){

    height = height * height;

    let BMI = weight / height;

    return BMI; 

}

let BMI = calculeBMI(58,1.60)
console.log(BMI)


function fatorNumber(number){
    let aux = number; 
    let result =1;

    while(aux>=1 ){

        result *= aux 
       aux--; 
    }
    return result
}

let result = fatorNumber(5);
console.log(result)


function dollar(moneyReal) {

    return moneyReal / 5.87;
    
}

let resultDollar = dollar(0.5)
console.log(resultDollar)


function perimeterRectangle(height, width){
   return height * width;
}

result = perimeterRectangle(10,10)
console.log(result)

function calculeAreaPerimeter(radius){
    let area = Math.pow(radius,2) * 3.14;

    let circumference = 2 * 3.14 * radius;

    return {area, circumference}; 
}

result = calculeAreaPerimeter(10)
console.log(`area: ${result.area} cm²`);
console.log(`Perímeter: ${result.circumference} cm`);
//console.log(result)

function createMultiplicationTable(number){

    let aux = 0;
    let table;
    let show;
    
    while(aux <= 10){
        table = aux * number;
        show = console.log(table)
        aux++; 
        
        
    }
    return show;
}

result = createMultiplicationTable(5)
console.log(result)

