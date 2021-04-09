// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// pseudo code
// if str.length === 0 => return;
// first condition the input str to have just one space between each word using str.replace(/regExp/_/-/, )
// else convert str to an array with split(' ')
// matches all capital letters /(?=[A-Z])/
// iterate through array join each lowercased word with a dash
function spinalCase(str) {
  let strArray = str.replace(/-|_/g, " ").split(/(?=[A-Z])| /);
  let tempString = strArray.join("-").toLowerCase();
  return tempString;
}

console.log(
  spinalCase("This Is Spinal Tap"),
  "should return the string this-is-spinal-tap"
);

console.log(
  spinalCase("thisIsSpinalTap"),
  "should return the string this-is-spinal-tap"
);

console.log(
  spinalCase("The_Andy_Griffith_Show"),
  "should return the string the-andy-griffith-show"
);

console.log(
  spinalCase("Teletubbies say Eh-oh"),
  "should return the string teletubbies-say-eh-oh"
);

console.log(
  spinalCase("AllThe-small Things"),
  "should return the string all-the-small-things"
);
