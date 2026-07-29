// Input: a string
// Output: reverse sentence
// Returns: 


function reverseEachWord(sentence){
    if(typeof sentence !== "string"){
        return "Invalid"
    }
let words = sentence.split(' ');
// console.log(words);
let result = [];
for(let word of words){
    //  console.log("this:", word);
    let letter = word.split("");
    // console.log("this",letter);
    letter.reverse();
    let reversedWord = letter.join("");
    
result.push(reversedWord);



}
   
return result.join(" ");
}

console.log(reverseEachWord("Hero is strong"));