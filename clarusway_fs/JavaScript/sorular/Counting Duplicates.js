// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// kopyalari say
// Yinelenenlerin sayısını sayın
// Giriş dizesinde bir kereden fazla meydana gelen farklı büyük/küçük harfe duyarsız alfabetik karakterlerin ve sayısal basamakların sayısını döndürecek bir işlev yazın . Giriş dizesinin yalnızca alfabe (hem büyük hem de küçük harf) ve sayısal rakamlar içerdiği varsayılabilir.

// Misal
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "bölünemezlik" -> 1 # 'i' occurs six times
// "Bölünemezlikler" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

let bolu =
  "cekoslovakyalilastiramadiKLArimizden misiniz 123*0**56775".toLowerCase();
let izmir = {};
for (let i = 0; i < bolu.length; i++) {
  if (bolu[i] in izmir) {
    izmir[bolu[i]] += 1;
  } else {
    izmir[bolu[i]] = 1;
  }
}
console.log(izmir);