let count_vowels = (str)=>{
let count = 0;
for(vowel of str){
    if(vowel === "a" || vowel === "A" || vowel === "e" || vowel === "E" || vowel === "i" || vowel === "I" || vowel === "o" || vowel === "O" || vowel === "u" || vowel === "U"){
        count++;
    }
}
console.log(`Vowels count in the given string is: ${count}`)
}
count_vowels("HEllo")