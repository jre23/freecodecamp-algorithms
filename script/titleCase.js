// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let arrayStr = str.split(" ");
  let tempString = "";
  for (let i = 0; i < arrayStr.length; i++) {
    arrayStr[i].toLowerCase();
    let firstLetterUpper = arrayStr[i][0].toUpperCase();
    tempString +=
      firstLetterUpper.concat(arrayStr[i].substring(1).toLowerCase()) + " ";
  }
  return tempString.trim();
}

titleCase("I'm a little tea pot");
