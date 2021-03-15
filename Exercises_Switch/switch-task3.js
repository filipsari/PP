3; /*Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

var dayInWeek = 11; // vaule from 1 to 7

switch (dayInWeek) {
  case 1:
    console.log("It's Weekday");
    break;

  case 2:
    console.log("It's Weekday");
    break;

  case 3:
    console.log("It's Weekday");
    break;

  case 4:
    console.log("It's Weekday");
    break;

  case 5:
    console.log("It's Weekday");
    break;

  case 6:
    console.log("It's Weekend");
    break;

  case 7:
    console.log("It's Weekend");
    break;

  default:
    console.log("Input must be a number between 1 and 7");
    break;
}
