let num1 = number(prompt("enter first number : "));
let num2 = number(prompt("enter second number : "));
let operator = prompt("enter operator(+, -, /, *) : ");

function add(num1, num2, operator){
    let result;
    if (operator == "+") {
        result =  num1 + num2;
        return result;        
    } else {
        alert("pls, operaor scould be  +")
    }
}

add(num1, num2, operator);


let num1 = Number(prompt("enter a valid number:"));
let num2 = Number(prompt("enter a valid number:"));
let operator = prompt("enter calculation operator '-','+','/','':");
let result;
function calculator(num1, num2, operator) {
  if (operator == "+") {
    result = num1 + num2;
    return result;
  } else if (operator == "-") {
    result = num1 - num2;
    return result;
  } else if (operator == "") {
    result = num1 * num2;
    return result;
  } else if (operator == "/") {
    result = num1 / num2;
    return result;
  } else {
    alert("enter a valid value and operator");
  }
}
console.log(calculator(num1, num2, operator));