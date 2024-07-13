/* program write a function that takes an array and returns a new array with only the
unique elements */
let input = require('prompt-sync')()
let value1 = input("Enter the array of elements: ");
let values = value1.split(',').map(item=>parseInt(item.trim()));
function unique_values(values){
let result = [];
let uniqueValues={};
for(let i=0;i < values.length;i++){
    let value=values[i]
    if(uniqueValues[value]==undefined){
        uniqueValues[value]=true;
        result.push(value);
    }
}
return result;
}
let unique_array=unique_values(values) 
console.log(unique_array);
