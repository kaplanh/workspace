// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log('****** 3- ARROW FUNCTIONS ******');

//* Örnek1:
//*************************************************************/

const topla = (x, y) => x + y;

//! Arrow fonksiynlarda eğer tek bir ifade kullanılrsa süslü paranteze
//! ihtiyaç olmaz ve dolayısla return gerekmek. aksi takdirde gerekir.
const usAl = (t, u) => {
  return t ** u;
};

const usAl2 = (t, u) => t ** u;

console.log('SONUC =', topla(5, 3));
console.log('US:', usAl(2, 3));
console.log('US:', usAl2(2, 3));

// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız. Ve lazımsa return yapmalıyız.
const menu = (times) => {
  console.log('============================');
  console.log(' JAVASCRIPT ÇOK KOLAYMIŞ');
  console.log('============================');
  return times * 2;
};

console.log(menu(2));

//* Örnek2:
//*************************************************************/

// const tekMi = (n) => (n % 2 === 1 ? 'TEKTIR' : 'CIFTIR');
const tekMi = (n) => (n % 2 ? 'TEKTIR' : 'CIFTIR');

console.log(tekMi(3));

//* Örnek2:
//*************************************************************/

const r = prompt('yarıçapı griniz');
const h = prompt('yukseklik giriniz');

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log('Silindirin hacmi :', Math.trunc(hacimHesapla(r, h)));
console.log('Silindirin hacmi :', hacimHesapla(r, h).toFixed(1));


degerleri 0 dir 
if (false) 
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")


// //!  1.YÖNTEM:
// function topla(a, b) {
//   return a + b;
// }

// //!  2.YÖNTEM:
// const topla = function (a, b) {
//   return a + b;
// };

// //!  3.YÖNTEM:
// const topla = (a, b) => a + b;

// const usAl = (taban, us) => taban**us