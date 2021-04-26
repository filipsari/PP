/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3


var array = [4, 2, 2, -1, 6]; 

var min = array[0];  // lazna predosptavka
var index = 0;       // lazna predpostavka

for ( var i = 1; i < array.length; i++) {

 if ( array[i]< min) {
   min = array[i];
   index = i;
 }
}

console.log(min, index); */


function minimumFinder (array) {

  var min = array[0];  // lazna predosptavka
  var index = 0;       // lazna predpostavka

  for ( var i = 1; i < array.length; i++) {

    if ( array[i]< min) {
      min = array[i];
      index = i;
    }
   }
   var final = "Min of this array is: " + min + " and position of that vaule is index:  " +index;
   return final;
}

var result = minimumFinder([4, 2, 2, -1, 6]);
console.log(result);