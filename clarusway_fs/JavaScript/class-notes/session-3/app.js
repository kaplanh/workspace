// console.log('***********\nSession 3 - Conditionals\n***********');


// ! if stament example
// check if the is positive

// const n1 = +promt('Enter a number');
// console.log(object);
// if (n1> 8){
//     console.log(`${n1} is positive`);
// } else console.log(`the number is either 0 or negative`);



// const x = 8;
// if (x === 8) {
//     console.log(x ===8);
// }
// const time =10;
// if (time < 11) {
//     console.log('Good morning!');

// } else {
//     console.log('Good day!')
// }

// const point = +prompt('Enter a  number ')
// let score = '';
// if ((point < 0) || (point > 100))
//     score = 'invalid score '
// else if (point < 25)
//     score = 'F';
// else if (point < 50)
//     score = 'E';
// else if (point < 65)
//     score = 'C';
// else if (point < 85)
//     score = 'B';
// else
//     score = 'A';

// console.log('Your score :', score)

// const n1 = +promt('Enter a number');
// console.log(object);
// if (n1> 8){
//     console.log(`${n1} is positive`);
// } else console.log(`the number is either 0 or negative`);


// const chest = prompt(`Enter your chest size`);
// if (chest >= 32 && chest <=34) {
//     console.log(`Your size (US) is ---> XS`);
// } else if (chest >= 35 && chest <=37) {
//     console.log(`Your size (US) is ---> S`);
// } else if (chest >= 38 && chest <=40) {
//     console.log(`Your size (US) is ---> M`);
// } else if (chest >= 41 && chest <=43) {
//     console.log(`Your size (US) is ---> L`);
// } else if (chest >= 44 && chest <=46) {
//     console.log(`Your size (US) is ---> XXL`);
// } else console.log(`Your size (US) is ---> XXL`); 

// const size = +prompt("Enter your chest size");
// if (size < 32) {
//   console.log("Wrong Size");
// } else if (size < 35) {
//   console.log("XS");
// } else if (size < 38) {
//   console.log("S");
// } else if (size < 41) {
//   console.log("M");
// } else if (size < 44) {
//   console.log("L");
// } else if (size < 47) {
//   console.log("XL");
// } else if (size < 50) {
//   console.log("XXL");
// } else {
//   console.log("Wrong Size");
  let canDrive = false;
const hasDriversLicense = true;
const hasGoodVision = true;
const isHandicapped = false;
const usingRegularCar = true;
result =
  hasDriversLicense && hasGoodVision
    ? !isHandicapped
      ? 'can drive'
      : !usingRegularCar
      ? 'can drive'
      : 'cannot drive'
    : 'cannot drive';
console.log(result);
}