// Input: string
// Output: total number of email, longest email domain
// Returns: an objects


function analyzeEmailDomains(text){
  
    // check String
    if(typeof text !== "string"){
        return "Invalid"
    }
//   logic
  let emailCount = 0;
    // console.log(emailCount);
    let longestDomain = "";


    let words = text.split(" ");

    for(let word of words){
        if(word.includes("@")){
            emailCount++;
            let parts = word.split("@");
            let domain = parts[1]
if(domain.length > longestDomain.length){
    longestDomain = domain;
}
        }
    }

  
return {
    emailCount: emailCount,
    longestDomain: longestDomain,
}
}

console.log(analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com"));
console.log(analyzeEmailDomains("Hello everyone!"));

