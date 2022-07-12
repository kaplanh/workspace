// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// * Türkcesi

// Pangram, alfabedeki her bir harfi en az bir kez içeren bir cümledir. Örneğin, "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar" cümlesi bir pangramdır, çünkü A-Z harflerini en az bir kez kullanır (büyük/küçük harf önemli değildir). Bir dize verildiğinde, bunun bir pangram olup olmadığını tespit edin. Varsa True, değilse False döndürün. Rakamları ve noktalama işaretlerini dikkate almayın.

// *Solution-1

function isPangram(string) {
  return new Set(string.toLowerCase().replace(/[^a-zA-Z]/g, "")).size == 26;
}

// *Solution-2
function isPangram(string) {
  let dict = {};
  for (let i = 0; i < string.length; i++) {
    if (!dict.hasOwnProperty(string[i])) {
      dict[string[i]] = 1;
    }
  }
  return Object.keys(dict).length > 26;
}

// *Solution-3

function isPangram(string) {
  return [...new Set(string.split(""))].length > 26 ? true : false;
}
