// Input: a string
// Output: vowels count number
// Returns: count vowels


function countVowels(str){
if(typeof str !== "string"){
    return "Invalid";
}

let words = str.toLowerCase();

let vowels = "aeiou";
// console.log(vowels);

let count = 0;

for(let i = 0; i < words.length; i++){
// console.log(words[i]);
    if(vowels.includes(words[i])){
         count++;
    }
}

return count;

}

console.log(countVowels("Hello World"));
