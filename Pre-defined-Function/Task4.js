/* 4.	Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/

function calculatesFunction (array) {
var calcuclatesIntegerNumbers = 0;

 for ( var i = 0;  i < array.length;  i++) {
   var integerValue = parseInt(array[i]);  //23     15
   var floatValues = parseFloat(array[i]); //23.1   15 

  if ( !isNaN(integerValue) && integerValue === floatValues) {
    calcuclatesIntegerNumbers++
  }

}
return calcuclatesIntegerNumbers;
}




console.log(calculatesFunction([NaN, 23.1, 15, false, -22.5, '', 4, 7,8,9, infinity,10, null]));