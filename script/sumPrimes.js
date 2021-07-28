// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// pseudo code
// base cases: null and 0
// create helper function to determine isPrime
// while loop condition (primeNum <= num)
// return sum
function sumPrimes(num) {
  if (num === null) throw new Error("Input is null");
  if (num === 0) return 0;
  let current = 2;
  let sum = 0;
  while (current <= num) {
    if (isPrime(current)) {
      sum += current;
    }
    current++;
  }
  return sum;
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

sumPrimes(10);

// sumPrimes(10) should return a number.

// Passed
// sumPrimes(10) should return 17.

// Passed
// sumPrimes(977) should return 73156.
