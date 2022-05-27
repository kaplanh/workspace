
//**Ternary 
//*condition ? expression1 : expression2
//*If the condition is true, expression1 is executed.
//*If the condition is false, expression2 is executed.


//*örnek-1
// let grade = prompt('Enter your score :');
// let result = (grade>=50) ? 'passed' : 'failed';
// console.log(`You ${result} the exam`);

//*örnek-2
// const age = 15;
// let result;
// if (age >= 18) {
//   result = "You are legal.";
// } else {
//   result = "You are not legal yet.";
// }
// console.log(result);

//!üçlü ifadeyle aynı kod:
const age = 15;
let result = age >= 18 ? "You are legal." : "You are not legal yet.";
console.log(result);

//**************************nested ternary (‼️ avoid using)************************

//*örnek-1
let a = 3;
let result = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);