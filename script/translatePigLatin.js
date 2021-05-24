// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// create vowel look up or if statement with all vowels considered
// if vowel, add way to end of string (string.concat("way"))
// else, remove first letter and add at the end of str + ay
//
const translatePigLatin = (str) => {
  // vowels are a e i o u
  if (
    str[0] === "a" ||
    str[0] === "e" ||
    str[0] === "i" ||
    str[0] === "o" ||
    str[0] === "u"
  ) {
    str += "way";
  } else {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        index = i;
        break;
      }
    }
    let consonantCluster = str.substring(0, index);
    str = str.substring(index) + consonantCluster + "ay";
  }
  return str;
};

console.log(translatePigLatin("consonant"), "expected onsonantcay");
console.log(translatePigLatin("algorithm"), "expected algorithmway");
console.log(translatePigLatin("glove"), "expected oveglay");
