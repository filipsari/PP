/*6.	Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]
*/

let arr = [1.6, 11.34, 9.23, 7, 3.11, 8];

let integerArray = arr.filter( e => Number.isInteger(e));

console.log(integerArray);


