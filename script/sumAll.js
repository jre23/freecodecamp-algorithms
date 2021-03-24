// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let lower = -Infinity;
  let higher;
  let sum = 0;
  if (arr[0] < arr[1]) {
    lower = arr[0];
    higher = arr[1];
  } else {
    lower = arr[1];
    higher = arr[0];
  }
  for (let i = lower; i <= higher; i++) {
    sum += i;
  }
  // sum += higher;
  // pseudo code
  // first check which one is lower
  // for loop starting from lower number to bigger number
  // adding i's inclusive
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
