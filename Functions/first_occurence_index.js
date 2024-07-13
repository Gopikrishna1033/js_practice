/* program to print a function that takes an array and returns the index of the first
occurrence of a given value */
let input = require('prompt-sync')()
let value = input("Enter array of elements: ");
let values = value.split(',').map(item=>parseInt(item.trim()));
let search_value = parseInt(input("Enter the value to find the index: "))
function ocuurence(values){
    for(let i=0;i<values.length;i++){
        if (values[i]===search_value){
            return i;
        }
    }
    return -1
}
console.log(ocuurence(values));