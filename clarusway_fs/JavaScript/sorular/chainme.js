Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;



//*Genel bir işlev zincirleyici yazın
// Bir başlangıç ​​değeri alan genel bir işlev zincirleyicisi ve üzerinde yürütülecek bir dizi işlev (Ruby için sembol dizisi) yazın.

// Her fonksiyonun girdisi, önceki fonksiyonun çıktısıdır (giriş olarak başlangıç ​​değerini alan ilk fonksiyon hariç). Yürütme tamamlandıktan sonra son değeri döndürün.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;

//* cözüm

function chain(input, fs) {
  for(let i = 0; i<fs.length;i++){
     input = fs[i](input);
  }
  return input
}
console.log(input);

