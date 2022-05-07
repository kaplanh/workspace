//Brendan eich 1995 de 10 günde gelistirmis
//high-level
// console.log('app.js is running');

// let ad = prompt('Adinizi girin');

// // let sonuc = confirm("Emin misiniz");

// // console.log(sonuc);

// console.log('adiniz : ' + ad + ' dir');
// console.log(`adiniz : ${ad} dir`);

// ----------------------

// var myNumber1 = 5;
// console.log(myNumber1);
// /*
// */

// var myNumber1 = 'merhaba';
// console.log(myNumber1);

// let var1 = 55;
// console.log(var1);

// var1 = 99;
// console.log(var1);

// {
//   let localVar1 = 'local variable';
//   var myName = 'matthw';
//   console.log(localVar1);
// }
// // console.log(localVar1);
// console.log(myName);

// // ! const konusu

// const student = {
//   firstName: 'Can',
//   number: 'F1234',
// };

// const otherStudent = student;
// console.log(otherStudent);

// otherStudent.number1 = 'F9876';

// console.log(student);

// // ! this gives error
// otherStudent = {
//   firstName: 'Sinan',
//   number: 'F3456',
// };

// console.log(otherStudent);
// for(let i=1;i<=10;i++){
//   console.log(`Merhaba`);
// }

// for(let i=1;i<=100;i++){
//   console.log(`${i}-Merhaba`);
// }
// let toplam = 0;
// for(let i=1;i<=10;i++){
//   toplam+=i;
// }
// console.log(toplam);
// const n = +prompt('hangi sayiya kadar toplamak istiyorsunuz');
// let toplam=0;
// for(let i=1;i<=n;i++){
//   toplam+=i;
// }
// console.log(toplam);
// let i=1;
// while(i<=10){
//   console.log(i+'-'+'merhaba');
//   i++
// }
let not;
do{
  not=prompt('0-100 arasinda bir puan giriniz');
}while(not<0||not>100);
  if(not<=25){
  console.log('FF');
  }else if(not<=45){
  console.log('DD');
 }
