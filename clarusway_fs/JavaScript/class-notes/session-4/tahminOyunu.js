//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.



// pseudocode
// 1. hak = 5
// 2. rastgele sayi tut(0-100)
// 3. kullanican tahmini al
// 4. hak = hak -1
// 5. eger tahmin esit ise restgele sayiya, print(tebrikler)
// eger tahmin esit degil ise restgele sayiya,
//           eger tahmin < rastgele sayi, print(arttir)
//           eger tahmin > rastgele sayi, print(azalt)
// 6.  eger hak > 0 ise kullanicidan tahmin al
//   degilse print(uzgunum oyun bitti)



// console.log('OYUN');

// let devam;
// do {
//   let hak = 5;
//   const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(rasgeleSayi);

//   do {
//     const tahmin = Number(prompt('Lütfen 0-100 arasında bir sayi giriniz:'));
//     hak -= 1;
//     if (tahmin === rasgeleSayi) {
//       console.log(`Tebrikler ${5 - hak}. denemede bildiniz.🥳`);
//       break;
//     } else {
//       console.log(`Dikkat ${hak} hakkınız kaldı`);
//       if (tahmin < rasgeleSayi) {
//         console.log('ARTTIR ⬆️');
//       } else {
//         console.log('AZALT ⬇️');
//       }
//     }
//   } while (hak > 0);

//   if (hak === 0) {
//     console.log('Üzgünüz oyunu kaybettiniz 😔');
//   }

//   devam = prompt('Yeniden oynamak ister misiniz e/h?');
// } while (devam == 'e' || devam == 'E');

// console.log('Yine bekleriz');



// ! peki arkadaşlar, artır veya azalt yerine tahmin aralığını güncelleyip xx -- yy arasında bir sayı tahmin edin demesini istesek nasıl yapabiliriz? ilk başta 1- 100 arasında sayı girin, sonra x ile 100 arasında örneğin...

// console.log("OYUN");

// let = devam = prompt(`Yeniden oynamak ister misiniz e/h?`);
// do {
//   let hak = 5;

//   const rastgeleSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(rastgeleSayi);
  // !=========================================================
  // let aralıkSayı = 100 - rastgeleSayi;
  // aralık sayıyı en yakın alt 10'lar basamağına yuvarlamak için ⬇️
  // aralıkSayı = Math.floor(rastgeleSayi / 10) * 10 - 10;
  // random sayının hemen bulunmaması için ekstra bir -10 yaptım
  // !=========================================================
  // do {
  //   const tahmin = Number(prompt("Lütfen 0-100 arası bir sayı giriniz:"));
  //   hak -= 1;
  //   if (tahmin === rastgeleSayi) {
  //     console.log(`Tebrikler ${5 - hak} denemede bildiniz. 🥳`);
  //     break;
  //   } else {
  //     console.log(`Dikkat ${hak} hakkınız kaldı`);
  //     if (tahmin < rastgeleSayi) {
        // console.log("Arttır ⬆️");
        // !=========================================================
        // aralık sayının eksiye düşmemesi için if koşulu açtım
        // if (aralıkSayı < 0) {
        //   console.log("0 - 100 arası bir sayı giriniz");
        // } else {
        //   console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`); //
        // }
        // !=========================================================
//       } else {
//         console.log("Azalt ⬇️");
//       }
//     }
//   } while (hak > 0);

//   if (hak === 0) {
//     console.log("Üzgünüz oyunu kaybettiniz 😿");
//   }

//   devam = prompt(`Yeniden oynamak ister misiniz e/h?`);
// } while (devam == "e" || devam == "E");

// console.log("Yine bekleriz");