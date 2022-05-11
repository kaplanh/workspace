console.log('******* LOOPS ********');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

// console.log("loops.js is running...");

// for(let i=1;i<=10;i++); {
//     console.log("Hello World");
// }

//  ?sarta bagli degilse sayi belli ise for kullan
// var kullanma
// burda const olmadi cünkü i degeri degisecek const da deger sabit 

// for(let i=1 ; i==30; i++) {
// const randomSayi = Math.random();
// console.log(randomSayi);
// }
// // i 30 a esit olmadigindan false oldugundan döngüye hic girmez 

// console.log("program bitti");
//math.trunc virgülsüz yazdırır.
  // math.floor alta yuvarlıyor.
  //ceil üste yuvarlar
  // round en yakın değere yuvarlar
// for (let i = 1; i <= 30; i++) {
//   const randomSayi = Math.floor(Math.random()*100+1);
//   console.log(randomSayi);
// }
// soru:1 den n ye kadar olan sayilarin toplamini bulunuz
// const n = prompt("n sayisini giriniz")
// let toplam = 0;
// for(let i= 1;i<=n;i++) {
//     toplam += i;
//     console.log('Toplam:',toplam); 

// }

//? Örnek: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// Çözüm-1
// let x = prompt('lütfen bir sayı');
// let sayac = 0
// for(let i =2; i < x; i++){
//   if (x%i == 0) {
//     sayac += 1
//   }
// }
// if (sayac > 0){
//   console.log(`Yazdıgınız sayı ${x} asal degildir`);
// }
// else {
//   console.log(`Yazdıgınız sayı ${x} asaldır`);
// }


//Çözüm-2
// let x = prompt('lütfen bir sayı');
// for(let i =2; i < x; i++){
//   if (x%i == 0) {
//     console.log(`Yazdıgınız sayı ${x} asal degildir`);
//   }
//   else{
//     console.log(`Yazdıgınız sayı ${x} asaldır`);
//   }
// }


// const n = prompt("enter n number");
// let prime = true;
// for (i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//     break;
//   }
// }
// if (prime) console.log("Prime Number");
// else console.log("Not prime");

// function prime(n) {
//     let prime = true;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             prime = false;
//         }
//     }
//     return prime;
// }

//********* WHILE ********

// let i = 1;
// while(i<= 5) {
//     console.log('Merhaba-', i);
//     i++; //i+=2:2 ser 2 ser artirir
// }

// console.log('Bitti');

// let not = prompt("Lütfen notunuzu giriniz (0-100):");

// while(not<0||not>100){
//     console.log('Girdiginiz not 0-100 arasinda olmalidir');
//     let not = prompt("Lütfen notunuzu giriniz (0-100):");
// }
// console.log('Girdiginiz not', not);

//************ DO-WHILE ***************

// let i= 1;

// do {
//     console.log('Merhaba-', i);
//     i++;
// } while (i<= 5);

// let not;
// do{
// const not = prompt('Lütfen notunuzu giriniz (0-100):');
// }while (not < 0|| not > 100);
//     console.log('Girdiginiz not', not);

//     let not;
//     do {
//       const not = prompt("Lütfen notunuzu giriniz (0-100):");
//       if (not < 0 || not > 100){
//           alert('Girdiginiz not 0-100 arasinda olmalidir');
//       }
//     } while (not < 0 || not > 100);
//     console.log("Girdiginiz not", not)

//? ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.



