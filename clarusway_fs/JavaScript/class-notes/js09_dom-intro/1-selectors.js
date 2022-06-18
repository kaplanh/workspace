//*===========================================
//*             DOM SELECTORS
//*===========================================

// dom agacinin kökünde < html > (node root) vardir
//     < html > elemaninin 2 cocuk elemani(child node'u) vardir < head >, <body>
//     not: her elemente bir node(dügüm) denir.

console.log('***** SELECTORS *****');
// HTML elemanlarini secmek icin asagidaki metodlar kullanilir
// document.getElementById('id ismi')//en hizli olan bu
// document.getElementsByTagName('tag ismi')
// document.getElementsByClassName('class isim')

// document.querySelector('CSS secisi')/#id,.class,tag ve section p a  section'un altindaki p nin icindeki a yi ismi ile karsilastigi ilk elemani ceker
// querySelectorAll('CSS secisi')/#id veya.class,tag ismi ile karsilastigi tüm elemanlari ceker

// önemli not:document.getElementsByTagName('tag ismi')
// document.getElementsByClassName('class isim') ile cagirdigimizda birden fazla eleman varsa bu HTML collection döndürür

// querySelectorAll('CSS secisi') node list döndürür
//! HTML collectionlara array method larini uygulayamazken 
//! node list lere  (forEach,filter,map,reduce gibi) array methodlarini uygulayabilirsiniz 


//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1 (Paragraph Style)
//*--------------------------------------------

const header = document.getElementById('header');
console.log(header);

header.style.color = 'red';

//* EXAMPLE-2 (Button Style)
//*-------------------------------------------
const button = document.getElementById('btn');
btn.style.backgroundColor = 'black';
btn.style.color = 'yellow';
btn.style.fontSize = '2rem';

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*============================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------

const img = document.getElementsByTagName('img');
console.log(img);

img[0].style.border = 'solid';
img[0].style.borderColor = 'red';
img[0].style.transform = 'rotate(-5deg)';

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ---------------
const par = document.getElementsByClassName('par');
// par[0].textContent = 'DOM Manipülasyonu'; 0.elemanin html ine yazar
// par[0].innerText = 'DOM Manipülasyonu'; 0.elemanin html ine yazar
par[0].innerHTML += ' <a href="https://www.clarusway.com">Clarusway</a>';

// not1:innerHTML ile hem yazi hemde  tag eklenebilir onu render - isler ve ekler

// not2:eskisini silip yerine yazar üzerine yazmasini istemiyorsak += yazariz

// not3:eskisinin yanina degilde altina yazmasini istiyorsak tirnaktan hemen sonra basa <br> yazabiliriz
// ' br <a href="https://www.clarusway.com">Clarusway</a>';

//not4:bir elementin yazisini degistireceksek textContent
// bir HTML kodu yazacaksak innerHtml kullanmak mantikli

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
document.querySelector('title').textContent = 'JS09-DOM ❤️';//emoji eklemek icin (windows + . )bas

const myPars = document.querySelectorAll('p');
console.log(myPars); //? NodeList
myPars.forEach((p) => console.log(p.innerText));
// p.textContent bosluklarla birlikte alir düzeni korur
// p.innerText bosluklari yok sayar sdc yazilari alir
//p.innerHTML p nin icindeki text ve varsa <a></a> tag i gibi  Html kodu olarak hepsini alir

// ama bunu querySelector ile yapabiliriz cünkü o node list olusturuyor

const myPars1 = document.getElementsByClassName('par');
console.log(myPars); //? HTML Collection
//!burda foreach() kullanamayiz kullanmak istiyorsak o zaman önce array e döndürmeliyiz bunun 2 yolu var
//! HTML Collection'dan Array' e çevirme yöntemleri
//? 1.Array.from()
const myParsArray = Array.from(myPars1); //? Array.from ile diziye çevirilir.
console.log(myParsArray);
myParsArray.forEach((p) => console.log(p.innerText));

//? 2.Spread/rest
[...myPars1].forEach((p) => console.log(p.innerText));

//! querySelector ile CSS vari seçim yapmak mümkündür.
//! CSS Selector'lerin hepsini kullanmak mümkündr.
console.log(document.querySelector('section p a'));
