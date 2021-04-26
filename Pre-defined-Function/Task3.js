
/* 3.	Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/



var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
 
var filterOutFalsy = array.filter(Boolean);     /* predefinisana f-ja filter(Boolean) */ 
console.log(filterOutFalsy);
 
