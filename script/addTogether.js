// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether(...nums) {
  console.log(nums, "nums addTogether");
  const checkNum = (num) => {
    return typeof num === "number";
  };
  if (nums.length > 1) {
    if (checkNum(nums[0]) && checkNum(nums[1])) {
      return nums[0] + nums[1];
    } else {
      return undefined;
    }
  } else {
    // If only one argument was found, return a new function
    if (checkNum(nums[0])) {
      // Return function that expects a second argument.
      function addSecond(second) {
        // Check if the new argument is a number
        if (checkNum(second)) {
          return nums[0] + second;
        } else {
          return undefined;
        }
      }
      return addSecond;
    } else {
      return undefined;
    }
  }
}

// addTogether(2, 3) should return 5.

// Passed
// addTogether(23, 30) should return 53.

// Passed
// addTogether(5)(7) should return 12.

// Passed
// addTogether("http://bit.ly/IqT6zt") should return undefined.

// Passed
// addTogether(2, "3") should return undefined.

// Passed
// addTogether(2)([3]) should return undefined.

// console.log(addTogether(6));
console.log(addTogether(5)(7), "should return 12");
// console.log(addTogether(2))
// console.log(sumTwoAnd(3))
