//*soru
// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


// *sorunun türkcesi
// Dizilerdeki En Büyük Sayıları Döndür
// Sağlanan her alt dizideki en büyük sayıdan oluşan bir dizi döndürün. Basit olması için, sağlanan dizi tam olarak 4 alt dizi içerecektir.

// Basit bir for döngüsüyle bir diziyi yineleyebileceğinizi ve her üyeye dizi sözdizimi ile erişebileceğinizi unutmayın arr[i].


//*cözüm
function largestOfFour(arr) {
  let maxarr = [];
  for (let i = 0; i < arr.length; i++) {
    maxarr.push(Math.max(...arr[i]));
  }
  return maxarr;
}

