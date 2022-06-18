//* ======================================================
//*                        EVENTS
//* ======================================================

// https://developer.mozilla.org/en-US/docs/Web/Events  js nin resmi sitesi gibi düsünebilirsin
// mdn mozillanin mozillada js yi yazan adamin


// element.addEventListener(olay, fonksiyon)
// HTML olayları için bir çok örnek verilebilir
// •
// Kullanıcı Fareyi tıkladığında onclick
// •
// Bir web sayfası yüklendiğinde onload
// •
// Fare bir elemanın üzerine geldiğinde onmouseover
// •
// Fare bir elemanın üzerinden ayrıldığında onmouseout
// •
// Bir elemanın içeriği değiştiğinde örnegin inputlarda yasi artirirken  onchange
// •
// Bir HTML formu gönderildiğinde onsubmit
// •
// Klavyeden bir tuşa basıldığında onkeyup veya onkeydown
//Bir kullanıcı bir giriş alanından ayrıldığında bir JavaScript yürütün  onblur

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//? METHOD-3 (ONLY JAVASCRIPT)
//?--------------------------------------------------------
// document.getElementById('header').onmouseover = function () {
//   document.getElementById('header').style.color = 'red';
// };


document.getElementById("header").onmouseover = function () {
  document.getElementById("header").style.color = "red";
};

const header = document.getElementById('header');

header.onmouseover = function () {
  header.style.color = 'red';
};

header.onmouseout = function () {
  header.style.color = 'black';
};


//? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
//?-------------------------------------------------------
// document.querySelector("#header").addEventListener("mouseover", function () {
//   document.querySelector("img").style.border = "2px dotted black";
// });

// document.querySelector("#header").addEventListener("mouseout", function () {
//   document.querySelector("img").style.border = "5px solid red";
// });

const myImg = document.querySelector('img');

myImg.addEventListener('mouseover', () => {
  myImg.style.transform = 'translateY(5px)';
});
//!transform = rotate(-45deg) döndürüyor
//! transform = translateY(-5px) kaydiriyor
// ! transform = scale(0.5, 1.2) kücültüp büyültüyor
// !butonlarin :hover inda ise yarar css tarafinda hover old da ver hover gidince kendi eski haline geliyor

   myImg.addEventListener("mouseout", () => {
     myImg.style.transform = "translateY(-5px)";
   });

myImg.addEventListener('mouseover', () => {
  myImg.style.transform = 'scale(1.2, 1.4)';
});

myImg.addEventListener('mouseout', () => {
  myImg.style.transform = 'scale(1)';
});

//* -------------------------------------------------
//* EXAMPLE-2 (Button onclick)
//* -------------------------------------------------

const button = document.querySelector('#btn');

button.addEventListener('click', function (event) {
  console.log(event.target);//event'in kaynagini ögrenmmemizi saglar evente'in nerden geldigini gösterir
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to right,purple, yellow)';
  button.textContent = 'Search';//butona tiklandiginda icindeki yaziyi searche cevirdi
});

// 'linear-gradient(to right,purple, yellow) soldan saga dogru purple dan yellowa dogru renk gecisi oldu 