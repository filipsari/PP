/* 1.	Write a program that shows text representation of a day 
in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”. */

var dayInWeek = 3; // vaule from 1 to 7

switch (dayInWeek) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wedesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Sunday");
    break;
}
