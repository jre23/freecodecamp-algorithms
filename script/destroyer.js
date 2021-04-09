// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// pseudo code
// check if args.length === 0 => return arr (nothing to remove)
// else, loop through args, checking each element in the arr against each args, removing matching elements
// splice method changes original array
function destroyer(arr, ...args) {
  if (args.length === 0) {
    return arr;
  } else {
    for (let i = 0; i < args.length; i++) {
      let j = 0;
      while (j < arr.length) {
        while (args[i] === arr[j]) {
          arr.splice(j, 1);
        }
        j++;
      }
    }
    return arr;
  }
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3), "should return [1, 1]");

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), "should return [1, 5, 1]");

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5), "should return [1]");

console.log(destroyer([2, 3, 2, 3], 2, 3), "should return []");

console.log(
  destroyer(["tree", "hamburger", 53], "tree", 53),
  "should return ['hamburger']"
);
