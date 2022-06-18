// *soru

// There is an array with some numbers.All numbers are equal except for one.Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It's guaranteed that array contains at least 3 numbers.

    // * türkcesi :
// Bazı sayıların olduğu bir dizi var.Biri hariç tüm sayılar eşittir.Onu bulmaya çalışın!

// Dizinin en az 3 sayı içermesi garanti edilir.



// *cözüm

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] == arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}

// *cözüm-2


const findUniq = (arr) => {
  arr = arr.sort((x, y) => x - y);
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}; 