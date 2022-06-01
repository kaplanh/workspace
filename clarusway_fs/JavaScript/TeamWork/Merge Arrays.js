
 Merge Arrays
Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

Analyze a problem, identify and apply programming knowledge for appropriate solution.

Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Write a function that takes two arrays of sorted numbers and combines them into one array as result.

Please note that, empty arrays to be checked to avoid exception!

Please take a look at the empty function and test code below:











Dizileri Birleştirme
Bu kodlama zorluğunun amacı, iki sıralanmış dizi verilen, bu girdilerin birleştirilmiş dizisini döndüren bir kod yazmaktır.

Öğrenme Çıktıları
Bu kodlama yarışmasının sonunda öğrenciler;

Bir sorunu analiz edin, uygun çözüm için programlama bilgisini belirleyin ve uygulayın.

JavaScript'i etkili bir şekilde kullanarak algoritmik tasarım ilkeleri hakkındaki bilgilerini gösterin.

Sorun bildirimi
İki sıralı sayı dizisini alan ve sonuç olarak bunları tek bir dizide birleştiren bir işlev yazın.

İstisnadan kaçınmak için boş dizilerin kontrol edilmesi gerektiğini lütfen unutmayın!

Lütfen aşağıdaki boş fonksiyona ve test koduna bir göz atın:


1.yöntem

const a = [];
const b = [];

function myFunction(a, b) {
  if (a == [] || b == []) {
    return [];
  } else {
    return a.concat(b).sort((a, b) => a - b);
  }
}
console.log(myFunction(a, b));




2.yöntem
const a = [1, 1, 6, 888, 67867, 8666];
const b = [2, 2, 4, 4, 55, 66345, 1231231, 4, 534, 43, 5];

function myFunction(a, b) {
  return a.concat(b).sort((a, b) => a - b);
}
console.log(myFunction(a, b));
