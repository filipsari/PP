/*12.	Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8
*/

let arr = [2, 7, 3, 8, 5.4];

let [first] = arr.sort( (x,y) => y - x)

console.log(first);