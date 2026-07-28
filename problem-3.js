// Input: an array of number
// Output: totalSteps and goalReached
// Returns: an object

function weeklyStepsSummary(stepsArray) {
  let total = 0;
  let goalReached = false;
  //  check is not an array
  if (!Array.isArray(stepsArray)) {
    return "Invalid";
  }

  // loop thorw
  for (let i = 0; i < stepsArray.length; i++) {
    if (typeof stepsArray[i] !== "number") {
      return "Invalid";
    }

    total += stepsArray[i];
  }
  if (total >= 50000) {
    goalReached = true;
  }

  return { totalSteps: total, goalReached: goalReached };
}
console.log(weeklyStepsSummary([8000, 7500, 9200, 6000, 10000, 5500, 4000]));
