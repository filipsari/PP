/*

3.	Write a program to compute the sum and product of an array of integers. */


var array = [10, 20];
var sum = 0;
var product = 1;  // this must have value 1, beacuse 0 value will always be 0 sum of product 

for ( var i = 0; i < array.length; i++) {
  sum = sum + array[i];
  product = product * array[i];
}

console.log( "Total sum of the array elements is: " + sum);
console.log("Sum of product of array elemenets is: " + product);



