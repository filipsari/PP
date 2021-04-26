/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function secondMinFinder(array) {
  var min = array[0]; 
  var secondMin = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } 
  }

    for (var i = 0; i < array.length; i++) {
      if (array[i] !== min && array[i] < secondMin) {
        secondMin = array[i];
      }
    }
 
return secondMin;
}
var result = secondMinFinder([4, 3, 1, -6, 6]);
console.log(result);

