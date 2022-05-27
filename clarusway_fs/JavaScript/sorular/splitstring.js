Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


// *türkcesi
// Bölünmüş Dizeler
// Çözümü, dizeyi iki karakterlik çiftlere ayıracak şekilde tamamlayın. Dize tek sayıda karakter içeriyorsa, son çiftin eksik ikinci karakterini bir alt çizgi ('_') ile değiştirmelidir.

// Örnekler:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//*solition


let text ='abcdefghjkl'
function solution(str){
   let x = [];
  for(let i = 0; i <str.length; i += 2){
    if(str.slice(i,i+2).length == 2){
    x.push(str.slice(i,i+2))
  }else{
    x.push(str.slice(i,i+2)+"_")
  }
  }
  
  return x
}