/*3.	Write a function that increases each element of the given array by the given value. If the value is omitted, 
increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
*/

// default value in ES6 

const arr = [4, 6, 11, -9, 2.1]; 
let thisValue = 2;

arr.forEach( (item,index,arr) => {
   arr[index] = item + thisValue;	
});

console.log(arr); // [ 6, 8, 13, -7, 4.1 ]





