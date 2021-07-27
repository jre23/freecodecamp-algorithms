// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// pseudo code
// base cases:
// if arr === null throw new Error
// loop through inputs, adding non duplicates to results array
function uniteUnique(...arr) {
  if (arr === null) throw new Error("Null input parameters");
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  let results = arr[0];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!results.includes(arr[i][j])) {
        results.push(arr[i][j]);
      }
    }
  }
  return results;
}

console.log(
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
  "should return [1, 3, 2, 5, 4"
);
