// Input: an array of number
// Output: largest and smallest number
// Returns:

function getLargestSmallest(number) {
  let smallest = number[0];
  let largest = number[0];


//   input is not an array
if (!Array.isArray(number)) {
      return "Invalid";
}

  for (let i = 0; i < number.length; i++) {
    
    // any element of the array is not a number
    if (typeof number[i] !== "number") {
      return "Invalid";
    }
    // smallest value check
    if (number[i] < smallest) {
      smallest = number[i];
    }

    // largest value check 
    if (number[i] > largest) {
      largest = number[i];
    }
  }

  return {
    largest: largest,
    smallest: smallest
  };
}

const result = (getLargestSmallest([45, 12, 69, 3, 67]));
console.log("largest:", result.largest);
console.log("smallest:", result.smallest);