// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Görev:
// Bir tamsayı listesi verildiğinde, elemanlarının toplamının tek mi çift mi olduğunu belirleyin.

// Cevabınızı bir dizeyle eşleşen "odd"veya olarak verin "even".

// Girdi dizisi boşsa, onu şu şekilde düşünün: [0](sıfırlı dizi).

// Örnekler:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2) {
    return "odd";
  } else {
    return "even";
  }
}

cözüm-2
function oddOrEven(array) {
  let sum = 0;
  // if (array.length==0)
  array.forEach((items) => {
    sum += items;
  });
  if (sum % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}