/* 8.	Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

var number1 = 10;
var number2 = 2;
var sign = "/";

switch (sign) {
  case "+":
    console.log(number1 + number2);
    break;

  case "-":
    console.log(number1 - number2);
    break;

  case "*":
    console.log(number1 * number2);
    break;

  default:
    if (sign === "/" && number2 !== 0 && number1 !== 0) {
      console.log(number1 / number2);
    } else {
      console.log("One number is 0 and division is not possible");
    }
}
