// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// pseudo code
// base cases:
// if str is null => throw new Error
// if str.length === 0 => return 'empty string'
// else
// iterate through string, checking each element and adding corresponding pair into an array
// return 2D array
function pairElement(str) {
  if (str === null) throw new Error("Input in null");
  if (str.length === 0) return "Empty input";
  let results = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === "A") {
      results.push(["A", "T"]);
    } else if (letter === "T") {
      results.push(["T", "A"]);
    } else if (letter === "C") {
      results.push(["C", "G"]);
    } else if (letter === "G") {
      results.push(["G", "C"]);
    }
  }
  return results;
}

console.log(
  pairElement("GCG"),
  'should return [["G", "C"], ["C","G"], ["G", "C"]]'
);
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// Passed
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

// Passed
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
