//**1.1*siir.js'den veri çağırma
//* 1.1* syntax'ı göstermek için import ve export komutlarını tekrar yaz. 


// import{adnan} from "./siir.js"
// console.log(adnan);

// import{adnan} from "./siir.js"
// console.log(adnan); 

//1.2* bunu html dökümanına yazdır.
// const paragraf = document.createElement('p');
// paragraf.innerText = adnan;

// document.body.appendChild(paragraf);


//*2.1* tüm veri türlerinden örnekler ver. 
//**deneme türler'den tüm verileri çağırma

// import {sayilar, yazi, elarabasi} from "./denemeTurler.js"
// console.log(sayilar);
// console.log(yazi);
// console.log(elarabasi);

// import {elarabasi} from "./denemeTurler.js"
// const car1 = new elarabasi('tayota') 


//*2.2* tümünü tek parantezde de çağırabiliriz. *3* *4*
// import {yazi, canımacomcom, myFunction} from "./denemeTurler.js"

// console.log(yazi);
// console.log(canımacomcom); 
// myFunction("Merhaba dünya")


//*5*
// *** tümüne tek bir isim vererekte çağırabiliriz.

// import * as moduller from "./denemeTurler.js"

// console.log(moduller);


//*6*
//**export default vererek istediğimiz isimle çağırabiliriz.
// süslüye gerek yoktur.

// import yusuf from './denemeTurler.js';

// console.log(yusuf('buralar hep tarlaydı'));

//*6.1* istediklerimizi ya da tümünü de defaultla beraber çağırabiliriz.
// import {myFunction, yazi, sayilar} from './denemeTurler.js';
// console.log(yazi);
// console.log(sayilar);
// console.log(myFunction("ert"));

//*6.2
// import ali, * as haci from './denemeTurler.js';

// console.log(ali('buralar hep tarlaydı'));


// //*6.2*
// console.log(haci.sayilar);

//*6.3* haci'nin içindeki 1 tanesini yazdırmak için ise; .'dan sonrasını göster
// console.log(haci.);



//*DİNAMİK İMPORT
//* * butonu yakalamak network'e bak.

// document.querySelector('button').addEventListener('click', () =>{
//     // console.log('Çalışıyor'); 
    
//     // console.log(import('./denemeTurler.js'))
//     //*  bu işlem bize promise döner.bunu işleyeceğiz.
//     //*7.1 networkten tıklandığını göster.

//     //*7.2* *burada içeriğini görebiliriz. (network+console) Ayrıca;
//     // import('./denemeTurler.js')
//     // .then((gelen) => console.log(gelen));


//     //*7.3* *direk içeriğini de yazdırabiliriz.istediğimiz kadar modülden anahtar kelime ile istediklerimizi çekebiliriz.
//     // import('./denemeTurler.js')
//     // .then((gelen) => console.log(gelen.isim));

//     //*7.4*bir hata olursa (isim) catchte döner.
//     // import('./r.js')
//     // .then((gelen) => console.log(gelen.isim))
//     // .catch((error) => console.log(error));
// })


//*8* async await kısmı
//* * promise kısmı bitti yoruma al.

// * * arrow fonksiyonun başına async yazıyoruz. aşağı await...
// document.querySelector('button').addEventListener('click', async () =>{

//     //*8.1 bir değişkene atayarak çağırabiliriz.
//     const cisim = await import ('./denemeTurler.js')
//     // console.log(cisim);


//     //*8.2* içini de yazdırabiliriz.
//     console.log(cisim.isim);

// })


//*9 * json dosyasını da kullanabiliriz. json dosyasını bağladık.
//* json dosyasında normalde dışarı aktarması yok. default olarak döndürüyor.
//yazımı da assert diye yazarak alıyoruz.

// import * as jeysın from './fake.json' assert {type:'json'}

// console.log(jeysın.default.forEach((user)=>{
//     console.log(user);
// }));



//*10* external kaynaktan import 

import * as ali from "https://github.com/clarusway/clarusway-full-stack-11-22/blob/main/javascript/class-notes/js01_Intro-variables/app.js";


console.log(ali.then((e)=>{
    console.log(e);
}));
// const store = createStore();

