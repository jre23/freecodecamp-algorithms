// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {
  // Only change code below this line
  // console.log(firstAndLast, 'firstAndLast')

  let splitFirstAndLast = firstAndLast.split(" ");

  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return splitFirstAndLast[0] + " " + splitFirstAndLast[1];
  };

  this.getFirstName = function () {
    return splitFirstAndLast[0];
  };

  this.getLastName = function () {
    return splitFirstAndLast[1];
  };

  this.setFirstName = function (first) {
    return (splitFirstAndLast[0] = first);
  };

  this.setLastName = function (last) {
    return (splitFirstAndLast[1] = last);
  };

  this.setFullName = function (firstAndLast) {
    return (splitFirstAndLast = firstAndLast.split(" "));
  };

  return firstAndLast;
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());

console.log(bob.setFirstName("Haskell"));

// Object.keys(bob).length should return 6.

// Passed
// bob instanceof Person should return true.

// Passed
// bob.firstName should return undefined.

// Passed
// bob.lastName should return undefined.

// Passed
// bob.getFirstName() should return the string Bob.

// Passed
// bob.getLastName() should return the string Ross.

// Passed
// bob.getFullName() should return the string Bob Ross.

// Passed
// bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

// Passed
// bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").

// Passed
// bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").

// Passed
// bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

// Passed
// bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
