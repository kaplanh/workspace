// *This is an interview question asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


// *türkcesi
// Bu, Google tarafından sorulan bir röportaj sorusudur.

// Bir sayı listesi ve bir k sayısı verildiğinde, listedeki herhangi iki sayının toplamının k olup olmadığını döndürün.

// Örneğin, [10, 15, 3, 7] ve 17'nin k'si verildiğinde, 10 + 7 17 olduğundan true değeri döndürür

// *solution
// 1.yol

// let arr = [10, 15, 3, 7];
// let k = 17;


// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] + arr[j] === k) {
//             console.log(true);            
//         } else {
//             console.log(false);
//         }    
//     }    
// }



// 2.yol


// function checkSum(arr, k) {
//     for (let i in arr) {
//         // console.log(i); //? 0, 1, 2, 3index numaralarini verir
//         // console.log(arr[i]);//? 10,15, 3, 7elemanlarin kendilerini verir
//         const temp = arr.slice(+i + 1);
//         for (let j in temp) {
//             if (arr[i] + temp[j] === k) return true;                
//             }        
//     }
//     return false;
// }

// console.log(checkSum([10, 15, 3, 7], 17));

// 3.yol

function checkSum2(arr, k) {
    for (let i in arr) {
        const temp = arr.slice();
        temp.splice(i, 1);
        if (arr.includes(k - arr[i])) return true;
        }
        return false;
}
   console.log(checkSum2([10, 15, 3, 7], 30));
