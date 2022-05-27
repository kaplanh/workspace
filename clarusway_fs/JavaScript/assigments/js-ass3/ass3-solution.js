//*************************1.soru***** */

// ## ÖDEV1:
// fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// const fiyatlar = [100, 250, 50, 89];

// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach(hsyn);
// function hsyn(v, i, arr) {
//     return arr[i] = v*1.1
    
// }
// console.log(fiyatlar);
// 1.yol
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach((v,i,arr) => arr[i] = v*1.1);
// function hsyn(v, i, arr) {
//   return (arr[i] = v * 1.1);
// }
// console.log(fiyatlar);

// 2.yol
// let x = fiyatlar.map((v) => v * 1.1);
// console.log(x);


// forEach
// fiyatlar.forEach((v) => console.log(v * 1.1);)



//*************************2.soru******************** */
// ## ÖDEV2:
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
// konsola tek tek bastırınız.
  
  
// fiyatlar.forEach((a) => {
//     if (a > 90) {
//         console.log(a);
//     }
// })


// fiyatlar.forEach((v) => v > 90 && console.log(v));


// const fizatlar = [100, 250, 50, 89];



//***********************3.soru*********************** */
// ## ÖDEV3:
// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

// let fiyatlar = [100, 250, 50, 89];

// let fiyatlarDüsük = fiyatlar.filter((v) => v < 110).forEach((k) =>console.log((k*1.1).toFixed(2));
// console.log(fiyatlarDüsük);

//***********************4.soru*********************** */
// ## ÖDEV4:
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];
// let düsük = maaslar.filter((x) => x < 4000).map((y) => y * 1.5);
// console.log(düsük);


//***********************5.soru*********************** */

## ÖDEV5:
Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

const maaslar = [3000, 5000, 4000, 6000, 6500];
const büyük = maaslar.filter((v) => v > 4000).map((y) => y * 1.25);
console.log(büyük);


2.yollet may = maaslar.filter((c)=>c>)


for (let i of maaslar) {
  if (i > 4000) {
    let x= i*1.25
  }
  console.log(x);
}



soru-5 çözüm-1
Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.
cözüm-1
const maaslar = [3000, 5000, 4000, 6000, 6500];

const buyuk = maaslar.filter((c) => c > 4000).map((y) => y * 1.25);

console.log(buyuk);

çözüm-2

let may = maaslar.filter((c) => c > 4000);
may.forEach((v,i,arr) => arr[i] = v * 1.25)

console.log(may);


çözüm-3
for(let i of maaslar){
    let x;
    if (i> 4000){
        x = i * 1.25
    } else{
        x = i
    }
    console.log(x);
}

//***********************6.soru*********************** */
## ÖDEV6:
Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.


//SORU-6
//Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.
// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let sum = 0;
// let toplam = maaslar.forEach((a) => {
//     return sum += a
// })
// console.log(sum);
// console.log(toplam);

// let x = maaslar.reduce(myFunction,0);

// function myFunction(a,b) {
//     return a + b
// }
// console.log(x);