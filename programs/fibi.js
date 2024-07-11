/* program to print the fibinocci series */
let input=require('prompt-sync')()
let value = parseInt(input("Enter a number: "));
let num1=0;
let num2=1;
let num3;
for(let i=0;i<value;i++){
    console.log(num1);
    num3 = num1+num2;
    num1 = num2;
    num2 = num3;
}
console.log(`The three fibinocci sereis are ${num1},${num2},${num3}`)
