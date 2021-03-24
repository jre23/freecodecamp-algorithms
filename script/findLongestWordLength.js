function findLongestWordLength(str) {
  let arrayStr = str.split(" ");
  let length = 0;
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i].length >= length) {
      length = arrayStr[i].length;
    }
  }
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
