/*	Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. */

var month = 11;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Autum");
    break;

  default:
    console.log("Input must be a number between 1 and 12");
    break;
}
