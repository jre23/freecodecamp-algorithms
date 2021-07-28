// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// pseudo code
// base cases:
// if num === null => throw new Error
// while loop condition (FibNum <= num) => keep adding to sum the odd nums
// return sum

function sumFibs(num) {
  if (num === null) throw new Error("Null input");
  if (num === 1) return 0;
  let fibArr = [1, 1];
  let nextFib = 0;
  let sum = fibArr[0] + fibArr[1];
  while (nextFib <= num) {
    nextFib = fibArr[0] + fibArr[1];
    fibArr[0] = fibArr[1];
    fibArr[1] = nextFib;
    if (nextFib % 2 !== 0 && nextFib <= num) {
      sum += nextFib;
    }
  }
  return sum;
}

sumFibs(4);

// sumFibs(1) should return a number.

// Passed
// sumFibs(1000) should return 1785.

// Passed
// sumFibs(4000000) should return 4613732.

// Passed
// sumFibs(4) should return 5.

// Passed
// sumFibs(75024) should return 60696.

// Passed
// sumFibs(75025) should return 135721.
