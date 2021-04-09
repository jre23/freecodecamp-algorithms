// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// pseudo code
// collection is an array of objects, source is an object
// if collection or source is empty, return []
// else loop through collection, testing each key/value pair against source
function whatIsInAName(collection, source) {
  var arr = [];
  const sourceLength = Object.keys(source).length;
  console.log(sourceLength, "sourceLength");
  if (collection.length === 0 || sourceLength === 0) {
    return arr;
  } else {
    for (let i = 0; i < collection.length; i++) {
      let collectionLength = Object.keys(collection[i]).length;
      if (collectionLength < sourceLength) {
        continue;
      }
      let count = 0;
      for (let key2 in source) {
        for (let key1 in collection[i]) {
          if (key1 === key2 && collection[i][key1] === source[key2]) {
            count++;
            if (count === sourceLength) {
              arr.push(collection[i]);
            }
            break;
          }
        }
      }
    }
    return arr;
  }
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  ),
  'should return [{ first: "Tybalt", last: "Capulet" }]'
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  }),
  'should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]'
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  ),
  'should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]'
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  ),
  'should return [{ "apple": 1, "bat": 2, "cookie": 2 }]'
);

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  ),
  'should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]'
);

console.log(
  whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }),
  "should return []"
);
