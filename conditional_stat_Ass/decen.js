let input = require('prompt-sync')()
let num = parseInt(input("Enter number1: "))
let num1 = parseInt(input("Enter number2: "))
let num2 = parseInt(input("Enter number3: "))
let small, middle, large;
if (num > num1 && num > num2){
    large = num;
    if(num1 > num2){
        middle = num1;
        small = num2;
    }else{
        middle = num2;
        small = num1;
    }
}
else if(num1 > num2 && num1 > num){
    large = num1;
    if(num2 > num){
        middle = num2;
        small = num;
    }else{
        middle = num;
        small = num2;
    }
}
else if(num2 > num1 && num2 > num){
    large = num2;
    if(num1 > num){
        middle = num1;
        small = num;
    }else{
        middle = num;
        small = num1;
    }
}
console.log(`The descending order of given 3 numbers is ${large}, ${middle}, ${small}`);