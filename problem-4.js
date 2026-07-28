// Input: a string
// Output: true/false
// Returns: str


function isPalindrome(str){
    // string check 
    if(typeof str !== "string"){
        return "Invalid";
    }

    let strSplit = str.split("");
    let reversedStr = strSplit.reverse();
    let joinedStr = reversedStr.join("");

   if(joinedStr === str){
    return true
   }
   else{
    return false;
   }

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hero"));
