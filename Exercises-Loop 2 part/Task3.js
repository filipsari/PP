// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var a = [4, 2, 2, -1, 6];

var minimum = a[0];
var minimumIndex = 0;

for (i = 1; i < a.length; i++) {
  if (a[i] < minimum) {
    minimum = a[i];
    minimumIndex = i;
  }
}

console.log(minimum + ', ' + minimumIndex);

/***************** */
var array = [4, 2, 2, -1, 6]; 

var min = array[0];  // lazna predosptavka
var index = 0;       // lazna predpostavka

for ( var i = 1; i < array.length; i++) {

 if ( array[i]< min) {
   min = array[i];
   index = i;
 }
}

console.log(min, index); 