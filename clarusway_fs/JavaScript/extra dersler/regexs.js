let x=5; /*0101 */   1111111111111111111
let y=1; /*0001 */
console.log(x&y); /*ikisi 1 ise 1 döndürür */
console.log(x|y); /*en az bir tane 1 varsa 1 döndürür */
console.log(x^y); /*sadece bir tane 1 varsa 1 döndürür.ikisi de 1 ise 0 */
console.log(~x);  /*hepsini ters çevirir*/ /* -(x+1) */
console.log(x<<2); /*sağdan 2 tane 0 ekle */
console.log(-x>>1); /*soldan 2 tane 1 ekler sayı negatif */
console.log(x>>>1); /*soldan 2 tane 0 ekle */
console.log(-28>>2)
console.log(~-7);
/*--------------------------------------------------- */
// let a=27;
// console.log((a).toString(16));
// let b=20;
// console.log(b.toString(2));
// let c=11011111111;
// console.log(parseInt(c, 2).toString(16)); /*c sayı,2 ikilik sistemde old. gösteriyor.  */
/*------------------------------------------------------*/
/*REGULAR EXPRESSIONS */
/*g i m */
// let q="This Is So Amazing";
// let w=q.search("So");
// console.log(w);
// let e=q.search("so");  /*case-sensitive. bulamazsa -1 döndürür */
// console.log(e);
// let r=q.search(/so/gi);  /* /so/i ile case insensitive oldu */
// console.log(r);
/*-------------------------------- */
// let text = "Visit Microsoft visit Apple Visit Amazon!";
// let result1 = text.replace("Visit", "veli");
// console.log(result1);
/*-------------------------------------------*/
// let mat2 = "Visit Microsoft visit Apple Visit Amazon";
// let result2 = mat2.replace(/Visit/i, "veli");
// console.log(result2);
// let mat3 = "Visit Microsoft visit Apple Visit Amazon";
// let result3 = mat3.replace(/Visit/g, "veli");
// console.log(result3);
// let mat4= "Visit Microsoft visit Apple Visit Amazon";
// let result4 = mat4.replace(/Visit/gi, "veli");
// console.log(result4);
// let text6 = " is ni cacth \nrrrrtjt ni ystjtfffff tjt\nni tjt iusffff";
// let result6 = text6.match(/tjt|is/m);
// console.log(result6);
// console.log(typeof result6);
/*----------------------------------------t----------- */
/*Brackets */
// let lesson1 = "everybody, has a story to tell";
// let peace1 = lesson1.match(/[a-z]*s\b/);
// console.log(peace1);
// let lesson2 = `eveybody has '024' 156 story to tell`;
// let peace2 = lesson2.match(/[0-3]/g);
// console.log(peace2);
// console.log(typeof peace2);
// let lesson3 = "|everybody, tell HAS a story to tell";
// let peace3 = lesson3.match(/h|a|o/gi);
// console.log(peace3);
/*-------------------------------- */
/*Metacharacters */
// let happy1 = "try to be the best 0 -3 4 5 '8123'   version of yourself";
// let smile1 = happy1.match(/\d/g);
// console.log(smile1);
// let happy2 = "try to be the best33 22 '23' version of yourself";
// let smile2 = happy2.match(/\s/g);
// console.log(smile2);
// let happy3 = "try to be the best33 22 '23' Be version of yourself";
// let smile3 = happy3.match(/\bbe/g);
// console.log(smile3);
// let happy4 = "try to be the best33 22 '23' try version of yourself";
// let smile4 = happy4.match(/ry\b/g);
// console.log(smile4);
// let happy5 = "try to be the best33 W2 '23' version of yourself";
// let smile5 = happy5.match(/\u0057/);
// console.log(smile5);
/*------------------------------------------------- */
/*Quantifier*/
// let quan1= "You are sss shining like a star";
// let tifier1= quan1.match(/s+/g);
// console.log(tifier1);
// let quan2= "You are shinninnng like a star";
// let tifier2= quan2.match(/\bs[a-z]*/g);
// console.log(tifier2); /*i nin arkasından 0 ya da çok sayıda karakter alır */
// let quan3= "You are shininnnnng like a star";
// let tifier3= quan3.match(/in?/g);
// console.log(tifier3);    /*i nin arkasından 0 ya da sadece 1 karakter alır */
/*---------------------------------------------------------------------------- */
// let object1= /\bt/;
// let test1= object1.test("The best things in life are free");
// console.log(test1);
// console.log(object1);
// let test2= /o/.test("The best things in life are free");
// console.log(test2);
// let test3= /t/.exec("The best things in life are free");
// console.log(test3);
// let lesson1 = "everybody, has a story to is has tell";
// let peace1 = lesson1.match(/[a-z]*s\b/g);
// console.log(peace1);
// let ooo = "everybody, has a story to is has tell";
// let peace11 = ooo.match(/\bs[a-z]*/g);
// console.log(peace11);










