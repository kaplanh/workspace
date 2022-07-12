// *Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// { "C++": 50, "ASM": 10, "Haskell": 20 } --> []

// *Türkcesi
// Görev Size bazı dilleri içeren bir sözlük / karma / nesne ve verilen dillerdeki test sonuçlarınız verilir.Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.Not: puanlar her zaman benzersiz olacaktır(bu nedenle yinelenen değerler yoktur) Örnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// *solution-1

function myLanguages(results) {
  return Object.entries(results)
    .filter((item) => item[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);
}

// *solution-2

// function myLanguages(results) {
//   let arr = [];
//   for (i in results) {
//     if (results[i] >= 60) {
//       arr.push([i, results[i]]);
//     }
//   }
//   arr.sort((a, b) => b[1] - a[1]);
//   return arr.map((e) => e[0]);
// }
