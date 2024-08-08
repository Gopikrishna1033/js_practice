/* Create an array by takinng input from the user and make sum of all elements and product of the array elements using reduce method */

let prompt= require('prompt-sync')();
n=parseInt(prompt("Enter a integer: "));
let array = [];
for (let i=1;i<=n;i++){
    array.push(i);
}
console.log(`array elements are ${array}`)
/* sum using reduce method */
let sum = array.reduce((num1,num2)=>{
    return num1 + num2;
})
console.log(`Sum of all the array elements are: ${sum}`)
/* product using reduce method */
let mul = array.reduce((num1,num2)=>{
    return num1*num2;
})
console.log(`Product of the given elements are: ${mul}`)