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
console.log(names);//['John', 'James', 'Aaron', 'Oliver', 'Scott']

// *********************join() method*******************************
// ➤ join() Yöntem , bir dize oluşturmak için bir dizideki tüm öğeleri birleştirmek için kullanılır ve diziyi değiştirmez .

// ➤ Bu metot bir eleman alır ve onu stringler arasında verir.

// ?Array.prototype.join([separator])
// ➤ Yöntem, sonuç dizesinde dizinin her bir bitişik öğe çiftini ayıran bir dize olanjoin()isteğe bağlı bir argümanı kabul ederseparator

// ➤ Yönteme geçmezseniz,separatorvarsayılan olarak virgülkullanılır.,join()

// ➤ Dizinin bir öğesi olması durumunda,join()yöntem bu öğeyi kullanmadan bir dize olarak döndürürseparator.

let arr =  ['a', 'b', 'c', 'd'];
console.log(arr.join(''));//returns 'abcd'
console.log(arr.join('-'));//returns 'a-b-c-d'
console.log(arr)//returns ['a', 'b', 'c', 'd']


// *örnek-2
const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(' ');
console.log(btnClass); // btn btn-primary btn-active


// *örnek-3

const cw = ["Clarusway", "Way", "to", "Reinvent", "Yourself"];

console.log(cw.join('_🎯_')); //Clarusway_🎯_Way_🎯_to_🎯_Reinvent_🎯_Yourself



// ************************reverse() method****************************************
// !Yöntem reverse()diziyi tersine çevirir ve diziyi yerinde değiştirir .
const cwPaths = ["Full-Stack", "AWS-Devops", "Data Science", "Cyber Security", "Salesforce"];
console.log("Original Array: " + cwPaths);//?Original Array: Full-Stack,AWS-Devops,Data Science,Cyber Security,Salesforce

// reversing array order
reversed_arr = cwPaths.reverse();

// reverse() modifies the original array
console.log("Array after reverse(): " + cwPaths);//?Array after reverse(): Salesforce,Cyber Security,Data Science,AWS-Devops,Full-Stack

// reverse() also returns the reversed array
console.log("Return Value of reverse(): " + reversed_arr);//?Return Value of reverse(): Salesforce,Cyber Security,Data Science,AWS-Devops,Full-Stack

//* örnek

const message = ["Yourself", "Reinvent", "Clarusway"];
console.log(message.reverse());//?["Clarusway", "Reinvent", "Yourself"]




// ********************sort() method**************************

// !➤ Yöntem , bir dizininsort() öğelerini yerinde sıralar. Sıralanan diziyi döndürmenin yanı sıra yöntem, orijinal dizideki öğelerin konumlarını değiştirir. Diziyi mutasyona uğratıyor .sort()

// !➤ Varsayılan olarak, sort()yöntem dizi öğelerini en küçük değer ilk ve en büyük değer en son olacak şekilde artan düzende sıralar.

//!Uyarı :
// Varsayılan olarak, sort()işlev değerleri dizeler olarak sıralar . Sayılar dizge olarak sıralanırsa, "25", "100"den büyüktür, çünkü "2", "1"den büyüktür. Bu nedenle, sayılar sıralanırken sort()yöntem yanlış sonuç verecektir.

const numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);//? [ 0, 1, 10, 2, 20, 3, 30 ]


const numbers = ["23","198","34","3","9"];

console.log (numbers.sort()); //?["198", "23", "3", "34", "9"]


const numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);
// [ 0,  1,  2, 3, 10, 20, 30 ]


//* örnek

// !kücükten büyüge  siralarken
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log(points);//?[1, 5, 10, 25, 40, 100]

// !büyükten kücüge siralarken

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return b-a });
console.log(points);//?[100, 40, 25, 10, 5, 1]


// *************************splice() Method*************

// !➤ Yöntem splice(), mevcut öğeleri kaldırarak veya değiştirerek ve/veya yerinde yeni öğeler ekleyerek bir dizinin içeriğini değiştirir. Bir dizinin bir kısmına onu değiştirmeden erişmek için
//?slice().

//! ➤ Yöntem splice(),

// • Silinen öğeleri içeren bir dizi döndürür.

// • Yalnızca bir öğe kaldırılırsa, bir öğe dizisi döndürür.

// • Hiçbir öğe kaldırılmazsa boş bir dizi döndürülür.

// *örnek

// *splice() metodunu kullanarak dizinin ilk 3 elemanini sil

let scores = [ 15, 21, 18, 42, 17];
let deletedScores = scores.splice(0, 3);
console.log(scores); // ?[42, 17]
console.log(deletedScores); //? [15, 21, 18]

// !➤ İlk parametre (0), silinecek ilk öğenin konumunu belirler.

//! ➤ İkinci parametre (3), silinecek öğe sayısını belirler . İkinci parametre atlanırsa, ilk parametre indeks değerinden sonraki tüm elemanlar kaldırılacaktır.

//! ➤ Bir splice()dizideki silinen öğeleri döndürür, hiçbir şey silinmezse boş bir dizi[]döndürülür. Orijinal dizi mutasyona uğradı ve kalan öğelere sahip.

// *splice() metodunu kullanarak diziye 3 eleman ekle

let colors = ['red', 'green', 'blue'];
let deletedColors = colors.splice(2, 0, 'purple', 'orange');
console.log(colors); //? ['red', 'green', 'purple', 'orange', 'blue']
console.log(deletedColors); //? [] nothing deleted

// !➤ Birinci parametre (2) eklenecek ilk elemanın konumunu belirler.(0,1-2.indexe gelecek)

// !➤ İkinci parametre (0), silinecek öğe sayısını belirler . Bu örnekte hiçbir şey silinmeyecek.

// !➤ Kalan parametreler ('purple', 'orange') eklenecek yeni öğeleri.

// !➤ Bir splice()dizideki silinen öğeleri döndürür, hiçbir şey silinmezse boş bir dizi [] döndürülür. Orijinal dizi mutasyona uğramış ve güncellenmiş dizi öğelerine sahip.
// *splice() metodunu kullanarak diziden 1 eleman sil  1 eleman ekle 

let colors = ['red', 'green', 'purple', 'orange', 'blue'];
let deletedColors = colors.splice(3, 1, 'pink');
console.log(colors); //? ['red', 'green', 'purple', 'pink', 'blue']
console.log(deletedColors); //? ['orange'] is deleted

//!➤ Birinci parametre (3) eklenecek ilk elemanın konumunu belirler.

// !➤ İkinci parametre (1), silinecek öğelerin sayısını belirler . Bu örnekte 'turuncu' silinecektir.

// !➤ Kalan parametre ('pembe') eklenecek yeni öğeleri.

// !➤ Birsplice()dizideki silinmiş öğeleri döndürür, Bu örnekte['orange']. Orijinal dizi mutasyona uğramış ve güncellenmiş dizi öğelerine sahip.

// *örnek

const colors=["Red" ,"Yellow", "Green", "Blue"];
colors.splice(1, 0, "White", "Pink");
console.log(colors);//?["Red" , "White", "Pink", Yellow", "Green", "Blue"]

// **********************************slice() Method*********************************

//! ➤ Yöntem, bir dizinin bir parçasını yenislice() bir diziye dilimler .

// !➤ Orijinal dizideğiştirilmeyecektir .

// !➤ İlkparametre , yeni dizinin başlangıç ​​konumunu belirler. start parametresi bilinmiyorsa 0'da başlar.Slice()

// !➤ İkinciparametre , yeni dizinin bitiş ( end dahil değildir ) konumunu belirler. Stop parametresi belirtilmezse,slice()yöntem dizinin uzunluğunu stop parametresi olarak kullanır.

// !➤ Hem başlatma hem de durdurma parametreleri boş bırakılabilir. Bu durumda orijinal dizi klonlanır.

// !slice(start, stop);

// *example

const colors = ["Red" ,"Yellow", "Green", "Blue"];
const slicedColors = colors.slice(1, 3);

const newColors = colors.slice();

console.log(colors); //?["Red" ,"Yellow", "Green", "Blue"] 
console.log(slicedColors); //?["Yellow", "Green"]
console.log(newColors); //?["Red" ,"Yellow", "Green", "Blue"] (orj degismeden aynisini klonladi)


// ***********************indexOf() Method*************************

// !➤ Yöntem indexOf(), bir dizideki belirtilen bir öğenin ilk oluşumundaki konumunu  döndürür

// !➤ Öğe bulunamazsa - 1 döner.

// !indexOf(searchElement, fromIndex)

// !➤ İlkparametre aranacak öğeyi belirler .
// !➤ İkinciparametre isteğe bağlıdır ve aramanın başlangıç ​​konumunu belirler.

// 🎗️ Not:
// indexOf()ve lastIndexOf() search Element öğesini dizideki öğelerle karşılaştırırken, (===) katı eşitlik karşılaştırma algoritmasını kullanır.

const colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];

console.log(colors.indexOf("Green")); // 2

console.log(colors.indexOf("Green",3)); // 5

console.log(colors.indexOf("green")); // -1


// ******************************lastIndexOf() Method******************************

// !➤ bir dizideki belirtilen öğenin son dizinini lastIndexOf() döndürür➤ Öğe bulunamazsa - 1 döner. ➤ indexOf() Yöntemden farklı olarak yöntem, lastIndexOf() öğeyi geriye doğru arar.

// !lastIndexOf(searchElement, fromIndex)

// !➤ İlkparametre aranacak öğeyi belirler .
// !➤ İkinciparametre isteğe bağlıdır ve aramanın başlangıç ​​konumunu belirler. İkinci bir parametre verilmezse, Dizinin sonundan başlar.

// *example

const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
colors.lastIndexOf("Green");
console.log(colors);

console.log(colors.lastIndexOf("Green")); // 5

console.log(colors.lastIndexOf("Green",3)); // 2

console.log(colors.lastIndexOf("green")); // -1

//* example
const colorsArray = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green","Black"];
const x = colorsArray.lastIndexOf("Green", 1);
console.log(x);//?-1