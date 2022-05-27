// *ÖDEV: Aşağıda görüldüğü gibi uzun olan youtube linklerini kısa formata çevirecek kodu yazınız.
// *https://www.youtube.com/watch?v=b7vfp5G4brE => uzun-link
// *https://youtu.be/b7vfp5G4brE => kısa-link


// *cözüm:

let x = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let y = x.replace("www.youtube.com/watch?v=", "youtu.be/");
console.log(y);

//!2.cözüm yolu
let zz =
  x.slice(0, x.indexOf("www")) + "youtu.be/" + x.slice(x.indexOf("=") + 1);
console.log(zz);

//! 3.cözüm yolu
let zzz =
  x.slice(0, x.indexOf("www")) +
  x.slice(x.indexOf("you"), x.indexOf("be")) +
  ".be/" +
  x.slice(x.indexOf("=") + 1);
console.log(zzz);