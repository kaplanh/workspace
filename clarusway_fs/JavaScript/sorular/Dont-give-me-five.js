//* In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

//* türce soru  Bana beş verme!
// Bu kata'da bir bölgenin başlangıç ​​ve bitiş numarasını alırsınız ve içinde 5 olan sayılar hariç tüm sayıların sayısını döndürmelisiniz. Başlangıç ​​ve bitiş numarası her ikisi de dahildir!

// Örnekler:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// Sonuç beşli içerebilir. ;-)
// Başlangıç ​​numarası her zaman bitiş numarasından küçük olacaktır. Her iki sayı da negatif olabilir!

// Çözümlerinizi ve çözme şeklinizi çok merak ediyorum. Belki biriniz kolay bir saf matematik çözümü bulur.

// Kodlarken iyi eğlenceler ve lütfen bu kata'yı oylamayı ve sıralamayı unutmayın! :-)

// Ayrıca başka katalar da yarattım. Bu kata'yı beğendiyseniz bir göz atın!


//* cözüm-2

function dontGiveMeFive(start, end) {
  let counter = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf("5") == -1) {
      counter++;
    }
  }
  return counter;
}
console.log(dontGiveMeFive(4, 100));