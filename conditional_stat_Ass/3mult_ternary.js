let input = require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
result = (num % 3 == 0)?console.log("Multiple of 3"):console.log("Not a multiple of 3");