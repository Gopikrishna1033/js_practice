/* program to check whether the number is armstrong or not */
let input=require('prompt-sync')()
let num = parseInt(input("Enter a number: "))
let str = num.toString().length
let sum=0;
let temp=num;
while(num!=0){
    digit=num%10
    sum=sum+Math.pow(digit,str)
    num=Math.floor(num/10)
}
if(sum===temp){
    console.log("Armstrong number")
}
else{
    console.log("Not an armstrong number")
}