// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// pseudo code
// split string into an array so I can iterate through each word
// check each arr[i] with before, if equal replace with after
// have to check for uppercase letter when replacing
const myReplace = (str, before, after) => {
  let arrStr = str.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === before) {
      if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.substring(1);
      } else {
        after = after[0].toLowerCase() + after.substring(1);
      }
      arrStr[i] = after;
      break;
    }
  }
  str = arrStr.join(" ");
  return str;
};

console.log(
  myReplace("Let us go to the store", "store", "mall"),
  "should return the string Let us go to the mall."
);

console.log(
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting"),
  "should return the string He is Sitting on the couch."
);

console.log(
  myReplace("I think we should look up there", "up", "Down"),
  "should return the string I think we should look down there."
);

console.log(
  myReplace("This has a spellngi error", "spellngi", "spelling"),
  "should return the string This has a spelling error."
);
