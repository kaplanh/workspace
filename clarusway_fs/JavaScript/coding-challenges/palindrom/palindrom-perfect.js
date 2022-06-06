// What is the palindromic numbers?

// A palindromic number (also known as a numeral palindrome or a numeric palindrome) is a number (such as 16461) that remains the same when its digits are reversed. In other words, it has reflectional symmetry across a vertical axis. The term palindromic is derived from palindrome, which refers to a word (such as rotor or racecar) whose spelling is unchanged when its letters are reversed.
// The first 30 palindromic numbers (in decimal) are:

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, … Wikipedia

// What is perfect numbers?

// Perfect Number: In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. For instance, 6 has divisors 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect number. Wikipedia

// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// analyze a problem, identify and apply programming knowledge for appropriate solution.

// demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// Problem Statement
// Take one or two inputs from user. List the results in the relevant fields using two different buttons.

// Examples:

// if top low limit is 0 and limit value is 1000. List all palindromic and perfect numbers between 0 and 1000.

// if top low limit is 50 and limit value is 100. List all palindromic and perfect numbers between 50 and 100.

// // ⌛ Happy Coding ✍
// JavaScript
// function countDigits(digit, low, high) { 
    
//     // returning value should be int type.
//     return null;
// }

// /* *** Tests *** */
// let desc = "reverse range";
// let inputDigit = 1;
// let inputLow = 3;
// let inputHigh = 2;
// let actual = countDigits(inputDigit, inputLow, inputHigh);
// let expected = -1;
// assertEqual(actual, expected, desc);

// desc = "digit gt 9";
// inputDigit = 10;
// inputLow = 2;
// inputHigh = 3;
// actual = countDigits(inputDigit, inputLow, inputHigh);
// expected = -1;
// assertEqual(actual, expected, desc);

// desc = "no match";
// inputDigit = 2;
// inputLow = 5;
// inputHigh = 10;
// actual = countDigits(inputDigit, inputLow, inputHigh);
// expected = 0;
// assertEqual(actual, expected, desc);

// desc = "3_30_39";
// inputDigit = 3;
// inputLow = 30;
// inputHigh = 39;
// actual = countDigits(inputDigit, inputLow, inputHigh);
// expected = 11;
// assertEqual(actual, expected, desc);

// function assertEqual(a, b, desc) {
//   if (a === b) {
//     console.log(`${desc} ... PASS`);
//   } else {
//     console.log(`${desc} ... FAIL: ${a} != ${b}`);
//   }
// }
// Python
// def countDigits(digit, low, high): 
    
//     # returning value should be int type.
//     return None 
// 	pass

// # *** Tests ***
// class Test(unittest.TestCase):
//     def test_countDigits_reverse_range(self):
//         desc = "reverse range"
//         inputDigit = 1
//         inputLow = 3
//         inputHigh = 2
//         actual = countDigits(inputDigit, inputLow, inputHigh)
//         expected = -1
//         self.assertEqual(actual, expected, desc)

//     def test_countDigits_digit_gt_9(self):
//         desc = "digit gt 9"
//         inputDigit = 10
//         inputLow = 2
//         inputHigh = 3
//         actual = countDigits(inputDigit, inputLow, inputHigh)
//         expected = -1
//         self.assertEqual(actual, expected, desc)

//     def test_countDigits_no_match(self):
//         desc = "no match"
//         inputDigit = 2
//         inputLow = 5
//         inputHigh = 10
//         actual = countDigits(inputDigit, inputLow, inputHigh)
//         expected = 0
//         self.assertEqual(actual, expected, desc)

//     def test_countDigits_3_30_39(self):
//         desc = "3_30_39"
//         inputDigit = 3
//         inputLow = 30
//         inputHigh = 39
//         actual = countDigits(inputDigit, inputLow, inputHigh)
//         expected = 11
//         self.assertEqual(actual, expected, desc)

// unittest.main(verbosity=2)


// * türkce
// Palindromik sayılar nedir ? Bir palindromik sayı(sayısal palindrom veya sayısal palindrom olarak da bilinir), rakamları ters çevrildiğinde aynı kalan bir sayıdır(16461 gibi).Başka bir deyişle, dikey bir eksen boyunca yansıma simetrisine sahiptir.Palindromik terimi, harfleri ters çevrildiğinde yazımı değişmeyen bir kelimeye(rotor veya yarış arabası gibi) atıfta bulunan palindromdan türetilmiştir.İlk 30 palindromik sayı(ondalık olarak) şunlardır: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, … Wikipedia Mükemmel sayılar nedir ? Mükemmel Sayı: Sayı teorisinde, mükemmel bir sayı, sayının kendisi hariç pozitif bölenlerinin toplamına eşit olan pozitif bir tam sayıdır.Örneğin, 6'nın 1, 2 ve 3 bölenleri vardır ve 1 2 3 = 6, yani 6 mükemmel bir sayıdır. Wikipedia Öğrenme Çıktıları Bu kodlama yarışmasının sonunda öğrenciler; Bir sorunu analiz edin, uygun çözüm için programlama bilgisini belirleyin ve uygulayın. JavaScript'i etkin bir şekilde kullanarak algoritmik tasarım ilkeleri bilgilerini gösterirler.Problem Beyanı Kullanıcıdan bir veya iki girdi alın.Sonuçları iki farklı buton kullanarak ilgili alanlarda listeleyiniz.Örnekler: üst alt sınır 0 ve sınır değeri 1000 ise. 0 ile 1000 arasındaki tüm palindromik ve mükemmel sayıları listeleyin.Üst alt sınır 50 ve sınır değeri 100 ise. 50 ile 100 arasındaki tüm palindromik ve mükemmel sayıları listeleyin. ⌛ Mutlu kodlama ✍


// PALINDROM //


let start = 0;
let finish = 100;
let palindrom = [];

for (let i= start+1; i < finish; i++) {
    if (i == i.toString().split('').reverse().join('')) {
        palindrom.push(i);
    } 
}
palindrom

// *PERFECT NUMBER //

function checkPerfect (finish) {

let bolenler = [];

for (let i = 1; i < finish; i++) {
    if (finish % i === 0) {
        bolenler.push(i);
    }   
}

if (finish && finish === bolenler.reduce((t, i) => t + i, 0)) {

    return true;
} else {
   
    return false;
}
}

console.log(checkPerfect(20));

let perfect = [];

for (let i = start; i < finish; i++) {
    if (checkPerfect(i)) {
        perfect.push(i);
    }
} 

console.log(perfect);
