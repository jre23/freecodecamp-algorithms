// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// pseudo code
// base cases:
// if str is null => throw new Error
// if str.length === 0 => 'Empty str'
// create look up => let alphaLookUp = 'a - z'
// loop through str comparing each str[i] to alphaLookUp and return letter that doesn't equal
function fearNotLetter(str) {
  if (str === null) throw new Error("Null input parameter");
  if (str.length === 0) return "a";
  let alphaLookUp = "abcdefghijklmnopqrstuvwxyz";
  let startIndex = alphaLookUp.indexOf(str[0]);
  for (let i = 0; i < str.length; i++, startIndex++) {
    if (str[i] !== alphaLookUp[startIndex]) {
      return alphaLookUp[startIndex];
    }
  }
  return undefined;
}

fearNotLetter("abce");

// fearNotLetter("abce") should return the string d.

// Passed
// fearNotLetter("abcdefghjklmno") should return the string i.

// Passed
// fearNotLetter("stvwx") should return the string u.

// Passed
// fearNotLetter("bcdf") should return the string e.

// Passed
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
