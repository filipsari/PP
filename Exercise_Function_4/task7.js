/* 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/ 

function intertwinesTwoArray (array1, array2) {
   
    var unitedArray = [];

    for ( var i = 0; i < array1.length; i++) {

      unitedArray[unitedArray.length] = array1[i];
      unitedArray[unitedArray.length] = array2[i];
    }

  return unitedArray;
}

var result = intertwinesTwoArray([4, 5, 6, 2],[3, 8, 11, 9]);
console.log(result);