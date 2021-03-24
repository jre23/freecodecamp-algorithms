// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] > num) {
    return 0;
  } else if (arr[arr.length - 1] < num) {
    return arr.length;
  } else {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        index = i;
        break;
      } else if (arr[i] > num) {
        index = i;
        break;
      } else if (i === arr.length - 1) {
        index = i + 1;
      }
    }
    console.log(index, "index");
    return index;
  }
}
getIndexToIns([40, 60], 50);

console.log(getIndexToIns([40, 60], 50), "expected 1");
console.log(getIndexToIns([2, 5, 10], 15), "expected 3");
console.log(getIndexToIns([10, 20, 30, 40, 50], 35), "expected 3");
