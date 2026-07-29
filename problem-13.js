// Input: an array
// Output: secondLargest
//

function secondLargest(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  let largestNum = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (typeof num !== "number") {
      return "Invalid";
    }
    if (num > largestNum) {
      secondLargest = largestNum;
      largestNum = num;
    } else if (num > secondLargest && num !== largestNum) {
      secondLargest = num;
    }
  }

  return secondLargest === Infinity ? null : secondLargest;
}

console.log(secondLargest([45, 12, 89, 3, 67]));
