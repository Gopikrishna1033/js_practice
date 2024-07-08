let input = require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
if (num % 7 === 0){
    console.log("multiple of 7");
}
else{
    console.log("not a multiple of 7");
}
