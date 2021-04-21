/*
2.	Write a program to sum the  numbers divided by 3 and 5 under 1000. */

var x=1;
var sum = 0;

for ( x = 1 ; x <= 1000 ; x++ ) {
  if (x%3 === 0 && x%5 === 0) {
   sum = sum + x ;
  }
}

console.log( "Sum of all numbers under 1000, divided by 3 and 5 is: " + sum);





