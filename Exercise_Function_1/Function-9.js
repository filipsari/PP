/*  9.	Write a program that calculates the sum of odd elements of a given array. */


function calculateSum (arr) {
var sum = 0;

  for ( i=0;  i<arr.length; i++) {
    if (arr[i]%2 !== 0) {
      sum += arr[i]
    }
  }
return sum;

}

console.log(calculateSum ([10,11,22,33,44,55]));

/*******2 ********** */

function sumOddNumber() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 !== 0) {
      sum = sum + arguments[i];
    }
  }
  return sum;
}
console.log(sumOddNumber(1, 3, 7, 5, 10, 20));

