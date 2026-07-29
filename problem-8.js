// Input: a number
// Output: true/false
// Returns: 




function isLeapYear(year){  
    // type check 
    if(typeof year !== "number"){
        return "Invalid"
    }

    // logic 
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        return true;
    }else{
        return false;
    }
return year;
    
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));