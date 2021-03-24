function reverseString(str) {
  let arrayStr = str.split("");
  arrayStr.reverse();
  str = arrayStr.join("");
  return str;
}

console.log(reverseString("hello"));
console.log(reverseString("Greetings from Earth"));
