let input = require('prompt-sync')()
let num = input("Enter number1: ")
let num1 = input("Enter number2: ")
if (num > num1){
    console.log(`${num1} is the least number`);
}
else{
    console.log(`${num} is least`)
}