// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// pseudo code
// base cases:
// if str === null => throw new Error
// if str.length === 0 => return 'Empty data set'
// loop through str calling str.replace when one of the specific characters are encountered
function convertHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

convertHTML("Dolce & Gabbana");

// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

// Passed
// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

// Passed
// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

// Passed
// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

// Passed
// convertHTML("Schindler's List") should return the string Schindler&apos;s List.

// Passed
// convertHTML("<>") should return the string &lt;&gt;.

// Passed
// convertHTML("abc") should return the string abc.
