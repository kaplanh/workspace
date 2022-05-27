// Data Types 
// -------------------
// Primitive Data Types:
// Undefined type
// Null type
// Numbers
// Strings
// Booleans
// BigInt
// Symbol
// Objects
// JavaScript değişkenleri, sayılar, dizeler, booleanlar ve daha fazlası gibi çok sayıda veri türünü tutabilir.
// JavaScript'te var ,let, ve const anahtar sözcükleri ile bir değişken bildirebiliriz

// var myNumber = 3; 
// let myNumber = 3;
// const myNumber =3
// 👆 this is pre ES6 style, prefer let or const
// let num1 = 15;
// const userName = 'John';

// ➤ Bir JavaScript değişkeninin türünü bulmak için JavaScript  typeof operatörünü kullanabiliriz.

// 1- eger bir degiskene deger atamazsak undefined data olur,null bir değerdir, referans değil
// let aValue;
// console.log('1. '+ typeof aValue); 

// 2-null object tipinde bir datadir
// aValue = null;
// console.log('2. ' + typeof aValue);

//3-number 
// aValue = 511;
// console.log('3. ' + typeof aValue);

//4. string 
// aValue = 'Clarusway';
//aValue = 'Clarusway';
//aValue = `Clarusway`;
// 👆Bir string tanımlamanın 3 yolu
// console.log('4. ' + typeof aValue);

// 5-boolean
// aValue = true;
// console.log('5. ' + typeof aValue);

// 6-bigint
// aValue = 1234567890123456789012345678901234567890n;
// console.log("6. " + typeof aValue);

// 7-Symbol
// aValue = Symbol("Clarusway");
// console.log("7. " + typeof aValue);

// 8-object
// aValue = { firstName: "John", lastName: "Doe" };
// console.log("8. " + typeof aVa


// 	The following values are always falsy:
// • false
// • 0 (zero)
// • -0 (minus zero)
// • 0n (BigInt zero)
// • '', "", `` (empty string)
// • null
// • undefined
// • NaN
// Everything else is truthy:
// • '0' (a string containing a single zero)
// • 'false' (a string containing the text “false”)
// • [] (an empty array)
// • {} (an empty object)
// • function(){} (an “empty” function)
