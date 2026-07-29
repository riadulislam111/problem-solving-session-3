// Input: number
// Output: sum of total number
// Returns: number


function sumDigits(num){
    // checking
    if(typeof num !== "number"){
        return "Invalid";
    }

    // logic throw 
    let sum =0;
    while(num > 0){
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10)
    }
    return sum;
}

console.log(sumDigits(1234));
