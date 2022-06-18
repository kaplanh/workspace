//!               JAVASCRİPT MODULS

//? module nedir ve işe yarar. 

// ES6 ile js e dahil olmuştur.. dil seviyesinde modül sistemi gelmiştir.. ana js dosyasına dışardan veri alarak js kullanımını kolaylaştırı. özellikle react kısmında yoğun olarak kullanılacak bir özelliktir.. istediğimiz zaman ve istediğimiz kadarını kullanabiliyoruz... modüller yalnızca katı modda yürütülüyor... 

//? kullanım için neye ihtiyaç var ayarlarımız neler?

//src? type?

//? import ve export nedir?
//import => içe aktarmak
//export => dışa aktarmak

//! iki çeşit export var .... 1. si export ... 2. si default export

//? hangi veri tiplerini import edebiliriz... import ve export ifadeleri diğer işlemlerim dışına yazılmalıdır.. yani fonksiyon içine , if bloğu içine yazılmamalıdr..

//her türlü veri tipi için import edebiliriz...

//? syntax ı nedir? network bölümünden  bağlandığını göster...

// import { deneme } from "./lib.js";
// console.log(deneme);

//? birden fazla import yapmak için hangi syntax kullanılır...

// import { myFunction, nameNumber } from "./lib.js";
// console.log(myFunction());
// console.log(nameNumber);

//?bütün hepsini aynı anda import edebilirmiyiz...

// import * as myLib from "./lib.js";
// console.log(myLib);
// console.log(myLib.myFunction());

//? import ettiklerimi ekrana yazdırabilirmiyim?
// import { metin } from "./lib.js";

// const sayfayaYazdır = document.createElement("p");
// sayfayaYazdır.innerText = metin;
// document.body.appendChild(sayfayaYazdır);

//? topluca import edebilirmiyim?

// import * as library from "./lib.js";
// console.log(library);
// console.log(library.myFunction());

//? export işleminde varsayılan(default) veri belirleyebilirmiyiz... default olanı import ederken süslü kullanılmaz.. default function ve classlarda kullanılabilir...

// import defaultGelsin from "./lib.js";

// console.log(defaultGelsin(3,2));

//? hem default hemde default olmayanları aynı anda çağırabilirmiyiz.

// import defaultGelsin, { myFunction, nameNumber, myArray } from "./lib.js";

// console.log(defaultGelsin(3,2), myFunction(), nameNumber, myArray);

//!                    DİNAMİK İMPORT (ES2020 de tanıtıldı...)
//?çağrıldığında import edilmesi olarak tanımlanabilir... bağlamadan ve bağlanınca network ta olan değişiklikler... dönüş promise oluyor.. promise ile ilgili methotları (then, catch, fetch, async, await etc..) kullanabiliriz...

// document.querySelector("button").addEventListener("click", () => {
//     console.log("button clicked");

//     import("./lib.js");
//     console.log(import("./lib.js"));

//     import("./lib.js")
//     .then((yakalama) => console.log(yakalama.metin));

// });

//? JSON dosyaları da import edilir mi?

// import * as myJson from "./fake.json" assert {type:"json"}; 
// console.log(myJson);

// console.log(myJson.default[1].name);

// console.log(myJson.default.forEach((item) => {
//     console.log(item.name);
    
// }));


//? external kaynaktan import...

// import { ali } from "url";
// console.log(ali);
