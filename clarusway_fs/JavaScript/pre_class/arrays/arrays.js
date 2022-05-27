// ! JavaScript'te dizi, sıralı bir değerler listesidir. Her hücre, dizine göre bir öğe olarak adlandırılır. (sıfır indeksli, ilk eleman olarak sıfırdan başlayarak)


// *1-Bir dizi değişmezi kullanma
// !Bir dizi oluşturmanın en kolay yolu bir dizi değişmezi kullanmaktır []. Örneğin,

const array1 = ["eat", "sleep"];


// *2-Yeni anahtar kelimeyi kullanma
// !new JavaScript'in anahtar sözcüğünü kullanarak da bir dizi oluşturabilirsiniz .

const array2 = new Array("eat", "sleep");


// !Boşluklar ve satır sonları önemli değildir.Bir bildirim birden çok satıra yayılabilir.

const colors = [
  "Red",
  "Blue",
  "Yellow"
];

// *Dizi örnekleri:

// // empty array
// const myList = [];
// // array of numbers
// const numberArray = [ 2, 4, 6, 8];
// // array of strings
// const dailyActivities = [ 'eat', 'work', 'sleep'];
// // array with mixed data types
// const newData = ['work', 'exercise', 1, true];
// // array with size
// let scores = Array(10);


const dailyActivities = [ 'eat', 'work', 'sleep'];
let first = dailyActivities[0]; // eat
let last = dailyActivities[dailyActivities.length - 1]; // sleep

const myArray = ['h', 'e', 'l', 'l', 'o'];
// first element
console.log(myArray[0]);  // "h"
// second element
console.log(myArray[1]); // "e"
// length
console.log(myArray.length); // 5


//* Arrays are Objects
➤ Diziler aynı zamanda nesne türüdür.JavaScript typeof operatörü, diziler için "nesne" döndürür.

➤ Bir değişkenin bir diziyi tutup tutmadığını kontrol etmek için Array.isArray()yöntemi veya instanceof operatörü kullanın:

const myArr = [1, 2, 3];
const myObj = {firstName: "John", lastName: "Doe", age:24};
console.log(typeof myArr); // object
console.log(Array.isArray(myArr)); // true
console.log(myArr instanceof Array); // true
console.log(typeof myObj); // object
console.log(Array.isArray(myObj)); // false
console.log(myObj instanceof Array); // false

//! Bir dizi, öğelerine erişmek için sayıları kullanır ve bir nesne, üyelerine erişmek için adları kullanır.


// *****************************************************************************
// *Add, remove, and change in arrays - Dizilerde ekleme, kaldırma ve değiştirme
//******************************************************************************


// *************************** öge ekleme .push() ve .unshift()***************
//! ➤ Bir diziye eleman eklemek için push() ve.unshift() yerleşik yöntemi kullanın

//! ➤ Yöntem push(), bir dizinin sonuna bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür. Örneğin,

let dailyActivities = ['eat', 'work', 'sleep'];

// add an element at the end
const newLength = dailyActivities.push('exercise');
console.log(dailyActivities); //  ['eat', 'work', 'sleep', 'exercise']
console.log(newLength); //4


//! ➤ Yöntem unshift(), bir dizinin başına bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür. Örneğin,

let dailyActivities = [ 'eat', 'work', 'sleep'];

//add an element at the start
const newLength = dailyActivities.unshift('get dressed'); 

console.log(dailyActivities); // ['get dressed', 'eat', 'work', 'sleep']
console.log(newLength); // 4



// !➤ İndeks değerine erişerek öğeleri ekleyin veya öğeleri değiştirin.

//! Dizilere eleman eklemek için indeks değerinin kullanılması istenmeyen yan etkilere neden olabileceğinden önerilmez.


let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

//! ➤ Bir dizinin iki elemanı olduğunu varsayalım. Dizin 3'e (dördüncü öğe) bir öğe eklemeye çalışırsanız, üçüncü öğe tanımsız olacaktır:

let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]


// ****************** pop() ve shift() metodlari ile ögeleri kaldirma**************

//! ➤ Yöntem pop(), dizideki son öğeyi kaldırır ve o öğeyi döndürür. Bu yöntem dizinin uzunluğunu değiştirir.
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
// remove the last element
const removedElement = dailyActivities.pop();
//get removed element
console.log(removedElement); // 'exercise'
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// !➤ Yöntem shift(), diziden ilk öğeyi kaldırır ve kaldırılan öğeyi döndürür. Bu yöntem dizinin uzunluğunu değiştirir.

let dailyActivities = ['work', 'eat', 'sleep'];
// remove the first element
const removedElement = dailyActivities.shift();
console.log(removedElement); // 'work'
console.log(dailyActivities); // ['eat', 'sleep']


// !➤ Dizinin bir öğesini değiştirmek için, değiştirmek istediğiniz hücrenin dizin değerini kullanın:

const myArray = ['h', 'e', 'l', 'l', 'o'];
// first element
myArray[0] = 'H';
console.log(myArray[0]);  // "H"
// second element
myArray[1] = 'a';
console.log(myArray[1]); // "a"
console.log(myArray); // ['H', 'a', 'l', 'l', 'o']

// *********************concat() method**********************************

// !➤ Yöntem concat(), iki veya daha fazla diziyi birleştirmek için kullanılır
// !➤ Bu yöntem mevcut dizileri değiştirmez , ancak birleştirilmiş dizilerin öğelerini içeren yeni bir dizi döndürür
const languages1 = ["JavaScript", "Python", "Java"];
const languages2 = ["C", "C++"];

// concatenating two arrays
const new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
const new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]


// *örnek
var x = ["John", "James"];
var y = ["Aaron", "Oliver"];
var z = ["Scott"]; 


var names = x.concat(y).concat(z);
console.log(names);