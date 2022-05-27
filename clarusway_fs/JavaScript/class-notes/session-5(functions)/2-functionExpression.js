// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

// !console.log(tekCift(5));
//! function expression yöntemiyle bir fonksiyon tanimladiginda önce tanimlananin yapilmasi gerekir yoksa Uncaught ReferenceError: Cannot access 'tekCift' before initialization hatasi alinir
const tekCift = function (number) {
  return number % 2 ? `${number} cifttir ` : `${number} tektir`;
}

console.log(tekCift(2));

// * örnek2: 3 sayinin en büyügünü bulan fonks yaz
// **************************************************
//!-Number.MAX_VALUE   = - 1.7976931348623157e+308  yani js de değerlendirilecek en küçük sayı
const büyükBul = function(x, y, z=-Number.MAX_VALUE) {
    let enBüyük;
    if(x>=y && x>=z) {
        enBüyük = x;
    } else if (y>=x && y>=z){
        enBüyük = y;
    } else if (z>=x && z>=y){
        enBüyük = z;
    } else{
        enBüyük = x;
    }
    return enBüyük;
};

console.log('En Büyük Sayi:', büyükBul(1, 3, 2));
console.log('En Büyük Sayi:', büyükBul(5, 2, 1));
console.log('En Büyük Sayi:', büyükBul(4, 6, 7));
console.log('En Büyük Sayi:', büyükBul(6, 6, 7));
console.log('En Büyük Sayi:', büyükBul(9, 8, 9));
console.log('En Büyük Sayi:', büyükBul(8, 9, 9));
console.log('En Büyük Sayi:', büyükBul(8, 9));
console.log('En Büyük Sayi:', büyükBul(-8, -9));


//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
  let sonuc;

  if (islem == '+') {
    sonuc = topla(s1, s2);
  } else if (islem == '-') {
    sonuc = cikar(s1, s2);
  } else if (islem == '*') {
    sonuc = carp(s1, s2);
  } else if (islem == '/') {
    sonuc = bol(s1, s2);
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

console.log(hesapla('+', 3, 5));
console.log(hesapla('-', 3, 5));
