// Input: an array 
// Output: running total
// Returns: array


function runningTotal(amounts){
    // checking
    if(!Array.isArray(amounts)){
        return "Invalid"
    }
    

let result = [];
let sum = 0;


for(let num of amounts){
    if(typeof num !== "number"){
        return "Invalid"
    }

    sum += num;
    result.push(sum)
}

return result;

}

console.log(runningTotal([100, 50, 25]));