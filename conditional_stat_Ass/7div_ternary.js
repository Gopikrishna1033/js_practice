let input = require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
div = (num %7 === 0)?console.log("divisible by 7"):console.log("not a divisible of 7");