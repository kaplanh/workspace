// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).

// *türkcesi
// Bir tamsayı dizisi verildiğinde, tek sayıda görüneni bulun. Her zaman tek sayıda görünen tek bir tam sayı olacaktır. Örnekler [7], 1 kez gerçekleştiği için (garip olan) 7 döndürmelidir. [0] 0 döndürmelidir, çünkü 1 kez oluşur (bu tektir). [1,1,2] 1 kez gerçekleştiği için 2 döndürmelidir (ki bu tektir). [0,1,0,1,0], 3 kez gerçekleştiği için (tek olan) 0 döndürmelidir. [1,2,2,3,3,3,4,3,3,3,2,2,1] 4 döndürmelidir, çünkü 1 kez görünür (ki bu tektir).

// *solution-1

function findOdd(A) {
  return A.sort((a, b) => a - b).filter(
    (x, y, z) => (z.indexOf(x) - z.lastIndexOf(x)) % 2 == 0
  )[0];
}

// *solution-2

function findOdd(arr) {
  const count = {};
  for (const element of arr) {
    count[element] ? (count[element] += 1) : (count[element] = 1);
  }
  const odd = Object.keys(count).filter((x) => count[x] % 2);
  return parseInt(odd);
}

// *solution-3

// function findOdd(arr) {
//   let dict = {};
//   for (let i = 0; i < arr.length; i++) {
//       if (!dict.hasOwnProperty(arr[i])) {
//       dict[arr[i]] = 1;
//     } else {
//       dict[arr[i]]++;
//     }
// }
// return +Object.entries(dict).filter((item) => item[1] % 2 != 0)[0][0];
// }

// *solution-4
// !includes yerine  hasOwnProperty(list[i]))

// let list = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
// let obj = {};

// for (let i = 0; i < list.length; i++) {
//   if (obj.hasOwnProperty(list[i])) {
//     obj[list[i]]++;
//   } else {
//     obj[list[i]] = 1;
//   }
// }
// let muaz = Object.values(obj).filter((x) => x % 2);
// console.log(Object.keys(obj).find((key) => obj[key] == muaz));
