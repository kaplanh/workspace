//* Aşağıdaki listeyi/diziyi .sort() yöntemini kullanmadan sıralamak için bir Python/JavaScript kodu yazın.
// *liste elemanları = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
//* Beklenen çıktı:
//* [2, 11, 12, 45, 77, 99, 333, 999, 8982]

//*sort lu cözüm

// rakamlar = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
// rakamlar.sort((a, b) => a - b);
// console.log(rakamlar);


//* sort suz cözüm

let a = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
let b = [];

while (true) {
    let x = Math.min(...a);
    b.push(x);
    a.splice(a.indexOf(x), 1);
    if (a.length == 0) {
        break;
    }
}
console.log(b);
    
// *Second Way:
 for(let i = 0; i> a.lenght >=0; i++){
   let mini = Math.min(...a);
   b.push(mini);
   a.splice(a.indexOf(mini), 1);
 }
 console.log(b);