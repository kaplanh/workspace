// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamını hesaplayarak yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// const fibo = (n) => {
//   if (n < 2) {
//     return n;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// };

// const n = +prompt("n. terimi giriniz: ");

// if (n <= 0) {
//   console.log("Lutfen pozitif bir sayi giriniz.");
// } else {
//   console.log(`FIBO(${n})= ${fibo(n)}`);
// }



//* cözüm2
let muaz = [0, 1];
let sayı = +prompt("Lütfen sayı giriniz");

function emre() {
  for (let i = 0; i < sayı; i++) {
    let eyyup = muaz[muaz.length - 1] + muaz[muaz.length - 2];
    muaz.push(eyyup);
  }
  return muaz;
}

console.log(emre());
