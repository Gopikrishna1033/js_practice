let input = require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
digit = (num >=100 && num <= 999)?console.log("3 digit number"):console.log("Not a 3 digit number");