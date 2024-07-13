/* program write a function that takes an array and returns the sum of all the elements */
let input = require('prompt-sync')()
let value = input("Enter array of elements: ");
let values = value.split(',').map(item=>parseInt(item.trim()));
function sumvalues(values){
    let sum=0;
    for(arr of values){
        sum+=arr;
    }
    return sum;
}
let result=sumvalues(values);
console.log(result);