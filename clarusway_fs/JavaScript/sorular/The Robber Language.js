// Introduction
// The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

// The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

// 'foo bar' => 'fofoo bobaror'(`fof-o-o bob-a-ror`)

// *Türkcesi

// giriiş Soyguncu Dili(Rövarspråket), İsveççe'de çocuklar tarafından bu dile aşina olmayan insanları yanlış yönlendirmek için kullanılan bir kelimedir. Astrid Lindgren tarafından yaratılan birkaç senaryoda çocuklar tarafından kullanılıyor. Buradaki fikir, bir cümledeki her ünsüzün, aralarına bir o eklenerek kopyalanmasıdır (b, bob olur). Ünlüler dokunulmadan bırakılır (a, a olarak kalır). Bu şekilde kodlanmış bir konuşmayı, özellikle hızlı konuşulduğunda, eğitimsiz bir kulağın anlaması oldukça zordur.

// Örnek
// Bu örnekte, f, b ve r ünsüzleri değiştirilmiştir.o ve a sesli harflerine dokunulmamıştır. 'foo bar' => 'fofoo bobaror'('fof-o-o bob-a-ror')

// *solution-1

function robberEncode(sentence) {
  let consonant = "BCDFGHJKLMNPQRSTVWXYZ";
  return sentence
    .split("")
    .map((x) =>
      consonant.includes(x)
        ? `${x}O${x}`
        : consonant.toLowerCase().includes(x)
        ? `${x}o${x}`
        : x
    )
    .join("");
}

// *solution-2

function robberEncode(sentence) {
  let vowels = ["a", "e", "i", "o", "u"];
  return sentence
    .split("")
    .map((e) => {
      if (
        !vowels.includes(e.toLowerCase()) &&
        ((e.charCodeAt(0) > 64 && e.charCodeAt(0) < 91) ||
          (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123))
      ) {
        if (e.charCodeAt(0) > 96) {
          return (e = e + "o" + e);
        } else {
          return (e = e + "O" + e);
        }
      } else {
        return (e = e);
      }
    })
    .join("");
}

// *solution-3

function robberEncode(sentence) {
  let pattern1 = /[A,E,I,O,U,\W]/g;
  let pattern2 = /[a,e,i,o,u,\W]/g;
  let result = "";
  let arr = sentence.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(pattern1) == null && arr[i].match(/[A-Z]/)) {
      result += arr[i] + "O" + arr[i];
    } else if (arr[i].match(pattern2) == null && arr[i].match(/[a-z]/)) {
      result += arr[i] + "o" + arr[i];
    } else {
      result += arr[i];
    }
  }
  return result;
}
