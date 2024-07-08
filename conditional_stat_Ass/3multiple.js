let input = require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
if(num % 3 == 0){
    console.log("Multiple of 3");
}
else{
    console.log("Not a multiple of 3");
}