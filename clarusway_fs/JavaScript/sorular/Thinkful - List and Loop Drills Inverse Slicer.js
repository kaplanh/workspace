// You're familiar with list slicing in Python and know, for example, that:

// >>> ages = [12, 14, 63, 72, 55, 24]
// >>> ages[2:4]
// [63, 72]
// >>> ages[2:]
// [63, 72, 55, 24]
// >>> ages[:3]
// [12, 14, 63]
// write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded. For example:

// >>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
// [12, 14, 55, 24]
// The input will always be a valid list, a and b will always be different integers equal to or greater than zero, but they may be zero or be larger than the length of the list.
// *Thinkful - Liste ve Döngü Matkapları: Ters Dilimleyici

// Python'da liste dilimlemeye aşinasınız ve örneğin şunu biliyorsunuz:

// >>> ages = [12, 14, 63, 72, 55, 24]
// >>> ages[2:4]
// [63, 72]
// >>> ages[2:]
// [63, 72, 55, 24]
// >>> ages[:3]
// [12, 14, 63]
// inverse_slice()üç argüman alan bir fonksiyon yazın : bir liste items, bir tamsayı ave bir tamsayı b. items[a:b] İşlev, hariç tutulan tarafından belirtilen dilim ile yeni bir liste döndürmelidir . Örneğin:

// >>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
// [12, 14, 55, 24]
// Girdi her zaman geçerli bir liste olacaktır ave bher zaman sıfıra eşit veya sıfırdan büyük farklı tam sayılar olacaktır, ancak bunlar sıfır olabilir veya listenin uzunluğundan daha büyük olabilir.

function inverseSlice(items, a, b) {
  items.splice(a, b - a); // a dan baslayarak b-a tanesini listeden cikariyor
  return items;
}





