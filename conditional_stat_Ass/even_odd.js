let input = require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
if (num % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}