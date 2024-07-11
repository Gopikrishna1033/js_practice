/* program to print factors of 24 using while loop */
let num=24;
let i=1;
while(i<=num){
    if(num%i === 0){
        console.log(`Factors of ${num} is ${i}`);
    }
    i++;
}