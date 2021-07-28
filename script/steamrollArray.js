// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// pseudo code
// base cases: null || empty
// create helper function to recurse through nested arrays and return a value
// loop through arr
// check if each element is an Object, if so, recurse
// else add to results array
// return results

function steamrollArray(arr) {
  console.log(arr, "arr");
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      console.log(Object.keys(arr[i]), "arr[i]");
      if (Object.keys(arr[i]).length === 0 && !Array.isArray(arr[i])) {
        results.push(arr[i]);
      } else {
        let resultsStr = getNested(arr[i]);
        for (let j = 0; j < resultsStr.length; j++) {
          if (!isNaN(resultsStr[j])) {
            results.push(parseInt(resultsStr[j]));
          } else {
            results.push(resultsStr[j]);
          }
        }
      }
    } else {
      results.push(arr[i]);
    }
  }
  console.log(results, "results");
  return results;
}

const getNested = (arr) => {
  // console.log(arr[0][0], 'arr getNested')
  if (typeof arr === "object") {
    let results = "";
    for (let i = 0; i < arr.length; i++) {
      results += getNested(arr[i]);
    }
    return results.trim();
  } else {
    return arr;
  }
};

// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]])
// steamrollArray([1, {}, [3, [[4]]]])
steamrollArray([1, [], [3, [[4]]]]);

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

// Passed
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

// Passed
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

// Passed
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

// Passed
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
