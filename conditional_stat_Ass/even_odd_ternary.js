let input = require('prompt-sync')()
let num = parseInt(input("Enter a Number: "))
result = (num%2 == 0)?console.log("Even"):console.log("Odd");