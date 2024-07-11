/* program to print reverse the digits of numbers */
let input=require('prompt-sync')();
let num=input("Enter a number: ");
let digit;
let reversed = 0;
while(num !=0){
    digit=num%10;
    reversed = reversed *10 +digit;
    num = Math.floor(num/10);
}
console.log(reversed);