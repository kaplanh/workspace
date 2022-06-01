Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

Example:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000 = MM 8 = VIII

Problem Statement
Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

Please note that, there is no need to be able to convert numbers larger than about 3000.(The Romans themselves didn't tend to go any higher)

Romen Rakamları
Bu kodlama zorluğunun amacı, verilen sayıları Romen Rakamlarına çeviren bir kod yazmaktır. Romalılar sayıları I, V, X, L, C, D, M harflerini kullanarak yazdılar.

Örnek:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII



Sorun bildirimi
Normal sayı(8, 148, 457 ) alan ve Romen Rakamlarına( VIII, CXLVIII, CDLVII)  çeviren bir fonksiyon yazın 

Lütfen 3000'den büyük sayıları dönüştürmeye gerek olmadığını unutmayın. (Romalıların kendileri daha yükseğe çıkma eğiliminde değildiler)

cözüm
 I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 ve M = 1000.

 IV=4,VI=6, XC= 90,CX=110

  ör.CCCXXXVI = 3 tane yüz, 3 tane on, bir tane 5 ve bir tane 1; sonuç 336 gibi.Yalnızca tek bir şey karışık: Bir harf, kendinden daha büyük bir sayıdan önce geldiğinde küçük sayı, büyükten çıkartırılır.Yani VI 6 demekken, IV 4 demektir; CX 110 demektir ama XC 90 demektir.Bununla beraber, toplama sistemini burada görmek pek de alışılmamış bir şey değildir; ör. 4 IV ile temsil edilir, yani IV = 4’tür.Roma rakamlarının en önemli özelliği 0 rakamının bulunmamasıdır. 0 sayısı 9. yüzyılda matematikçi Harizmi tarafından bulunmuştur.
  
1.yol

function romanToInt(a) {
  const translations = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let counter = 0;
  a.replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");
  for (let char of a) {
    counter += translations[char];
  }
  return counter;
}
console.log(romanToInt("MMVIII"));



2.yol


// Program to convert Roman
// Numerals to Numberspublic
    // This function returns
    // value of a Roman symbol
    function value(r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }
 
    // Finds decimal value of a
    // given roman numeral
    function romanToDecimal( str)
    {
     
        // Initialize result
        var res = 0;
 
        for (i = 0; i < str.length; i++)
        {
         
            // Getting value of symbol s[i]
            var s1 = value(str.charAt(i));
 
            // Getting value of symbol s[i+1]
            if (i + 1 < str.length) {
                var s2 = value(str.charAt(i + 1));
 
                // Comparing both values
                if (s1 >= s2) {
                    // Value of current symbol
                    // is greater or equalto
                    // the next symbol
                    res = res + s1;
                }
                else
                {
                 
                    // Value of current symbol is
                    // less than the next symbol
                    res = res + s2 - s1;
                    i++;
                }
            } else {
                res = res + s1;
            }
        }
 
        return res;
    }
 
    // Driver Code
     
        // Considering inputs given are valid
        var str = "MCMIV";
        document.write("Integer form of Roman Numeral"
        + " is " + romanToDecimal(str));
 
// This code is contributed by umadevi9616