/* 10.	Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no
*/

function final (array) {
   if (array.every(e => e>0)) {
     console.log("yes");
   } else {  console.log("no");
  }
};

final([3, 11, 9, 5, 6]);