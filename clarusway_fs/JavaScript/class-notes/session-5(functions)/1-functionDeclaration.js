// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//*örnek1:
//*****************************************************
yazdir(); //!invoke

//!Dclaration
//!parametre almamis, bir sey döndürmez(void function)
function yazdir() {
  console.log("Merhaba");
}

yazdir(); //!invoke
yazdir(); //!invoke

console.log(typeof yazdir); //* function

//* örnek2: parametreli fonksiyon
//********************************************** */

function selamla(name) {
  console.log(`Mrhaba ${name}`);
}

selamla("Erhan");
selamla("Erol");
selamla("Jason");

//!ikinci bir argümant daha ekleyebiliriz
function selamla(name, lastName) {
  console.log(`Mrhaba ${name} ${lastName}`);
}

selamla("Erhan", "Yilmaz");
selamla("Erol");
selamla("Jason");

//!bir parametreyi cagirma sirasinda kullanmaz isek onun yerine default parametre atayabiliriz.Örnekteki lastName parametrelerinin default degerine  kaplan atanmistir
function selamla(name, lastName = "kaplan") {
  console.log(`Merhaba ${name} ${lastName}`);
}

selamla("Erhan", "Yilmaz");
selamla("Erol");
selamla("Jason");

//!bir parametreyi cagirma sirasinda kullanmaz isek onun yerine default parametre atayabiliriz.Örnekteki lastName parametrelerinin default degerine  '' atanmistir
function selamla(name, lastName = "") {
  console.log(`Merhaba ${name} ${lastName}`);
}

selamla("Erhan", "Yilmaz");
selamla("Erol");
selamla("Jason");

//*örnek3: Parametreli dönüs degerli
//******************************** */
function yasHesapla(year, name) {
  // const mesaj = `${name} in yasi ${2022-year} dir `
  const mesaj = `${name} in yaşı ${new Date().getFullYear() - year} dir `;
  return mesaj; //!Date klasinin getFullYear fonksiyonunu cagirdik
}

const mesaj1 = yasHesapla(1986, "Elif");
console.log(mesaj1);

//* Örnek4: Parametreli, Dönüs degerli
// ************************************************
console.log(tekCift(5));
console.log(tekCift(2));

function tekCift(number) {
  return number % 2 ? `${number} cifttir ` : `${number} tektir`;
}

//!number % 2 === 0 / number % 2 ayni anlama gelir
//!burda ternary kullandik yani sonuc true ise 1.degeri flse ise 2.degeri alir
