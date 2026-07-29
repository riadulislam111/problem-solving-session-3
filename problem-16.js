// Input: a object
// Output: string and index 
// Return: obj


function charFrequency(str){
if(typeof str !== 'string'){
    return "Invalid"
}

let result ={};

for(let letter of str){
    // console.log(letter,"letters");
    if(result.hasOwnProperty(letter)){
    result[letter]++;
    }
    else{
        result[letter] = 1;
    }
}



return result;
}

console.log(charFrequency('hero'));
console.log(charFrequency('hello'));