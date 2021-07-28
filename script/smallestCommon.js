// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// pseudo code
// base cases: check if null or empty
// loop from low to high (sort the array)
// start with common = high
// check if high is evenly divisible by each number in the range inclusive
// while loop condition (i <= high)
// common % 2 !== 0 => increment common, set i back to low

function smallestCommons(arr) {
  if (arr === null) throw new Error("Input is null");
  if (arr.length === 0) return 0;
  arr = arr.sort((a, b) => a - b);
  let common = arr[1];
  let low = arr[0];
  let high = arr[1];
  while (low <= high) {
    if (common % low !== 0) {
      low = arr[0];
      common++;
    } else {
      low++;
    }
  }
  return common;
}

// smallestCommons([1, 5]) should return a number.

// Passed
// smallestCommons([1, 5]) should return 60.

// Passed
// smallestCommons([5, 1]) should return 60.

// Passed
// smallestCommons([2, 10]) should return 2520.

// Passed
// smallestCommons([1, 13]) should return 360360.

// Passed
// smallestCommons([23, 18]) should return 6056820.
