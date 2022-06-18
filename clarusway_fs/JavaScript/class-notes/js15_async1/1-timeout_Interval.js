//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded(birim zamanda bir islem yapan) ve Asenkron Programlama dilidir.
//! Javascript, bir single-threaded (birim zamanda -1- tane iş parçacığı <<kolumuz bir process ise parmaklarımız thread (iş parçacığı)'dir>> çalıştırıyor. Ancak Java, C++, Python'da multi-threaded aktif hale getirilebiliyor) ve Asenkron Programlama dilidir.

//! CPU birden fazla iş yaparken aslında zamanı küçük dilimlere böldüğünde milisaniye seviyesinde.belli bir zaman aralığında birden fazla iş yapıyormuş gibi geliyor.
// Multithreading:birden fazla isi ayni anda yapma
// process(kol) - threadler(parmak)
//! javascript single-threading dilken nasil multithreading olarka calisiyor apiler sayesinde

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
// const bekle = (ms) => {
//     const start = new Date().getTime();
//     while (new Date().getTime() < start + ms) {
//         ;
//     }
// };
// console.log('hello');
// // alert('ITF'); // !blocking-code
// console.time('timer');
// bekle(3000);
// console.timeEnd('timer');
// console.log('FS11');

//* Asenkron (setTimeout)
//*-----------------------------------------------
// // setTimeout(function, milliseconds);
// //!macro task kuyrugu
// setTimeout(() => { //!non-blocking code
//     console.log('Selamun Aleyküm');
// }, 1000);//!zamani sifir olsa bile setTime macro da oldugu icin microlari beklemek zorunda

// //!micro task kuyrugu
// console.log('Aleyküm Selam');
// console.log('Merhaba');

// setTimeout(() => {//!non-blocking code
//     console.log('Dostum naber?');
// }, 500)

//* Asenkron (setInterval, clearInterval)
//*-----------------------------------------------
// console.log('Counter Started');
// let counter = 0;
// const sec1 = setInterval(() => {
//     console.log(++counter);
//     if (counter > 9) {
//       clearInterval(sec1);
//     }
// }, 1000);
// console.log('Counter Finished');




//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? ÇÖZÜMLER:
//? -------------------------------
//* 1- XMLHttpRequest (Eski yöntem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlammis hali)




