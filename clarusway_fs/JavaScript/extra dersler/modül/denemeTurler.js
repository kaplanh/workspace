//**Bunların tümünü export ile tanımlayarak dışa aktarabiliriz.
//*2* diğer türlerden örnekler ver. 

// export const yazi = "front end developer"

// export const sayilar = [1,2,3,4,5,6,7];

// export function myFunction(par){
//     console.log(par);
// }

// export class elarabasi {
//     constructor(araba){
//         console.log(`benim arabam ${araba}`);
//     }
// }

//*2,3,4 açık

//*3*
//**Aynı zamanda export'ları silip, aşağıda tanımlayarakta export işlemini tek seferde gerçekleştirebiliriz.

// export{yazi, sayilar, myFunction}

//*4*
//**Bir de istediğimize alias isim de verebiliriz.

// export{yazi, sayilar as canımacomcom, myFunction}


//*5*tümüne tek isim de verebiliriz.app.js'de exportları yeniden yaz.
//üç noktaya tıklayınca içeriğine de ulaşabiliriz.


//*6* (yukarıya gerek yok.)
//**export default verip app.js'de istediğimiz değerle çağırabiliriz. class ve fonksiyonlarda. 

// export default function myFunction(par){
//     console.log(par);
// }


// export const yazi = "front end developer"

// export const sayilar = [1,2,3,4,5,6,7];



//*7*

//*7.1
//*önce dahil etmediğimizde networkte birşey olmadığını göster.


//* *click olduğunda içe aktar..

export const isim = 'içeri aktarılacak';
