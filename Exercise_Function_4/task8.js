/* 8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function twoArrays ( arr1, arr2) {
 
  var unitedArray = arr1;

   for ( var i = 0; i < arr2.length; i++){

    unitedArray[unitedArray.length] = arr2[i]; 
   }

  return unitedArray; 
}

var united = twoArrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(united);

