// Input: array and number
// Output: item  price and displayTotal
// Returns: true/false


function verifyCartTotal(itemPrices, displayedTotal){
if(!Array.isArray(itemPrices) || typeof displayedTotal !== "number"){
    return "Invalid"
}


let itemSum = 0;
for(let item of itemPrices){

    if(typeof item !== "number"){
        return "Invalid"
    }
 itemSum += item;


}
if(itemSum === displayedTotal){
    return true;
}
else{
    return false;
}



}

console.log(verifyCartTotal([250, 400, 150], 800));
console.log(verifyCartTotal([250, 150], 750));