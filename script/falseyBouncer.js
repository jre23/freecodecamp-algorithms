// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  arr = arr.filter((element) => Boolean(element) === true);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
