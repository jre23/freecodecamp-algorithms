// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  console.log(bool, "bool");
  console.log(typeof bool, "typeof");
  console.log(typeof bool === "boolean");
  return typeof bool === "boolean";
}

booWho(null);
