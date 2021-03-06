// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let results = [];
  let remainder = arr.length % size;
  for (let i = 0; i < arr.length; i += size) {
    let j = i;
    let chunk = [];
    if (arr.length - j > remainder) {
      while (j < size + i) {
        chunk.push(arr[j]);
        j++;
      }
      results.push(chunk);
    }
  }
  if (remainder != 0) {
    let chunkRemainder = [];
    for (let i = arr.length - remainder; i < arr.length; i++) {
      chunkRemainder.push(arr[i]);
    }
    results.push(chunkRemainder);
  }
  return results;
}

// console.log(
//   chunkArrayInGroups(["a", "b", "c", "d"], 2),
//   'expected [["a", "b"], ["c", "d"]]'
// );
// console.log(
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3),
//   "expected [[0, 1, 2], [3, 4, 5]]"
// );
// console.log(
//   chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2),
//   "expected [[0, 1], [2, 3], [4, 5]]"
// );

console.log(
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4),
  "expected [[0, 1, 2, 3], [4, 5]]"
);

console.log(
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3),
  "expected [[0, 1, 2], [3, 4, 5], [6]]"
);

console.log(
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4),
  "expected [[0, 1, 2, 3], [4, 5, 6, 7], [8]]"
);

console.log(
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2),
  "expected [[0, 1], [2, 3], [4, 5], [6, 7], [8]]"
);
