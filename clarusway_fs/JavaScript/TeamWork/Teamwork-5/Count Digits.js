S-CC-007 : Count Digits
Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

Analyze a problem, identify and apply programming knowledge for appropriate solution.
Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.
Problem Statement
Write a function that takes a 3 parameters: a digit, lower and upper bounds as integer. The function will calculate how many times the given digit occurs within the numbers including lower and upper bounds.
Please solve the problem for 0 <= digit < 10 and 0 < low < high, otherwise function should return -1.
If no occurrences is found in the given range, function should return 0.


//* türkce

S - CC - 007 : Rakamları Sayma Diyelim ki 0 ile 9 arasında bir d tamsayımız var, ayrıca alt ve üst sınırlar olarak sırasıyla düşük ve yüksek iki pozitif tamsayımız var.Düşük ve yüksek sınırları da dahil olmak üzere, düşük ve yüksek arasındaki tüm tamsayılarda d'nin bir basamak olarak kaç kez geçtiğini bulmalıyız. Örneğin, d=2, düşük= 10, yüksek = 23, o zaman çıktı 6 olacaktır, çünkü d = 2 rakamı 6 kez oluşur: 12, 20, 21, 22, 23. Öğrenme Çıktıları Bu kodlama yarışmasının sonunda , öğrenciler; Bir sorunu analiz edin, uygun çözüm için programlama bilgisini belirleyin ve uygulayın. JavaScript ve Python'u etkin bir şekilde kullanarak algoritmik tasarım ilkeleri bilgilerini gösterin.Problem Açıklama 3 parametre alan bir fonksiyon yazın: tamsayı olarak bir rakam, alt ve üst sınırlar.İşlev, verilen basamağın alt ve üst sınırlar dahil olmak üzere sayılar içinde kaç kez geçtiğini hesaplayacaktır.Lütfen sorunu 0 <= basamak < 10 ve 0 < düşük < yüksek için çözün, aksi takdirde işlev - 1 döndürmelidir.Verilen aralıkta hiçbir oluşum bulunmazsa, işlev 0 döndürmelidir.


    // countDigits(3, 30, 39);


    // function countDigits(digit, low, high) {
    
    //     let counter = 0;
    //     if ((0 <= digit && digit < 10) && (0 < low && low < high)) {
    //         for (let i =low; i <= high; i++){
    //             i.toString().split('').forEach((num) => {

    //                 if (digit == num) {
    //                     counter++;
    //                 }
    //             });
    //         }
    //     } else {
    //         counter = -1;
    //     }
    //     console.log(counter);
    // }

    // *2.yol

// countDigits(3, 30, 39);
// function countDigits(digit, low, high) {
//     let counter = 0;
//     for (let i = low; i <= high; i++) {
//         i.toString().split('').forEach((num) => {
//             (num == digit) ? counter++ : (digit >= 10 ? counter ==-1 : counter);
//         });    
//     }
//     return counter;
    
// }

function countDigits(digit, low, high) {
  let counter = 0;
  if (0 <= digit && digit < 10 && 0 < low && low < high) {
    for (let i = low; i <= high; i++) {
      let str = i.toString();
      str.split("").forEach((x) => {
        if (x == digit) {
          counter += 1;
        }
      });
    }
    return counter;
  } else if (digit >= 10) {
    return -1;
  } else {
    return counter;
  }
}