// Input: an array
// Output: even or odd count
// Returns: object


 function countEvenOdd(arr){
    if(!Array.isArray(arr)){
        return "Invalid"
    }
  
    let evenCount = 0;
    let oddCount = 0;
    for(let num of arr){
        if(typeof num !== "number"){
            return "Invalid"
        }
if(num %2 === 0){
    evenCount++
}
else{
    oddCount++;
}

    }


return {
    Even: evenCount,
    Odd: oddCount,
}
 }


 console.log(countEvenOdd([1, 2, 3, 4, 5]));