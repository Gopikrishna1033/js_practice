let input = require('prompt-sync')()
let num = parseInt(input("Enter  number1: "))
let num1 = parseInt(input("Enter  number2: "))
let num2 = parseInt(input("Enter number3: "))
if (num < num1 && num < num2){
    console.log(`${num} is least number`);
}else if(num1 < num2 && num1 < num){
    console.log(`${num1} is least number`);
}else{
    console.log(`${num2} is least number`);
}