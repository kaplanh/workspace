// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// *2 dize alın s1 ve s2 yalnızca a ile arasındaki z harfleri ekleyin. s1 veya s2'den gelen - her biri yalnızca bir kez alınan - farklı harfler içeren, mümkün olan en uzun, yeni bir sıralanmış dize döndür.

// Örnekler:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"
function longest(s1, s2) {
  let x = s1.concat(s2);
  let y = x.split("").sort();
  let z = new Set(y);
  return Array.from(z).join("");
}