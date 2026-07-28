// Input: a string
// Output: string an even index positions
// Returns:


function filterEvenPositionWords(sentence){

 let splitWord = sentence.split(" ");
//  console.log(splitWord);
let Word = [];
for(let i = 0; i < splitWord.length; i++){
    if(i % 2 === 0){
     Word.push(splitWord[i])
     
    } 
}

return Word.join(" ");


     
}

console.log(filterEvenPositionWords('The quick brown fox jumps'));


