/*8.	Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/


let arr = [1.6, 11.34, 29.23, 7, 3.11, 18];
let finder = arr.filter(e => e>10)

console.log(finder);

