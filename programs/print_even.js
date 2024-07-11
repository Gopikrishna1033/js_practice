/* program to read 5 numbers and print only even */
let input=require('prompt-sync')()
let value=input("Enter the integers: ")
let values = value.split(',').map(item=> parseInt(item.trim()));
for(i=0;i<=values.length-1;i++){
    if(values[i]%2==0){
        console.log(values[i]);
    }
}