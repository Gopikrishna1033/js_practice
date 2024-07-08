let input  = require('prompt-sync')()
let num = parseInt(input("Enter  number1: "))
let num1 = parseInt(input("Enter  number2: "))
if (num > num1){
    console.log(`the ${num} is greater`);
}
else{
    console.log(`${num1} is greater`)
}