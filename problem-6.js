// Input: an array of number
// Output: unique value
// Retunes: result 


function removeDuplicates(arr){
      let result = [];

    if(!Array.isArray(arr)){
        return "Invalid"
    }

    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }
    return result;
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));