//*SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

//* cözüm:
let emre = function (year) {
  if (year % 100 != 0 && year % 4 == 0) {
    return `This ${year} is a Leap Year`;
  } else if (year % 100 == 0 && year % 400 == 0) {
    return `This ${year} is a Leap Year`;
  } else {
    return `Entered ${year} isn't a Leap Year`;
  }
};

console.log(emre(2000));

const year = Number(prompt('yil yaziniz'));

let  leapYear = function(year){
  if ()
}
