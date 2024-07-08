let input = require('prompt-sync')()
let num = parseInt(input("Enter number1: "))
let num1 = parseInt(input("Enter number2: "))
let num2 = parseInt(input("Enter number3: "))
let small, middle, large;
if(num < num1 && num < num2){
    small = num;
    if(num1 < num2){
        middle = num1;
        large = num2;
    }else{
        middle = num2;
        large = num1;
    }
}
else if(num1 < num2 && num1 < num){
    small = num1;
    if(num < num2){
        middle = num;
        large = num2;
    }else{
        middle = num2;
        large = num;
    }
}
else if(num2 < num1 && num2 < num){
    small = num2;
    if(num1 < num){
        middle = num1;
        large = num;
    }else{
        middle = num;
        large = num1;
    }
}
console.log(`The ascending order of the given 3 numbers is ${small},${middle},${large}`);