/* 8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
 */

function keepingUpAppearances (array, number) {
  var counter = 0;

for ( var i = 0; i < array.length ; i++) {
  if ( number === array[i]) {
      counter ++;
  }
}

  return counter
}


var result = keepingUpAppearances( [1,2,3,4,4,4,4,4,4,5,6,7,8,9,10] , 4);
console.log(result);