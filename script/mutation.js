// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  if (arr.length < 2) {
    return false;
  }
  let bool = true;
  let arrayStr = arr[1].split("");
  for (let i = 0; i < arrayStr.length; i++) {
    if (!arr[0].toLowerCase().includes(arrayStr[i].toLowerCase())) {
      bool = false;
    }
  }
  return bool;
}

console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));
