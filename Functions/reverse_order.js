/*program to print a function that takes an array and reverses the order of the elements */
let input = require('prompt-sync')()
let values = input("Enter the array of elements: ");
let arr = values.split(',').map(item=>parseInt(item.trim()));
function reverse(arr){
    result = arr.reverse()
    return result
}
console.log(reverse(arr))
