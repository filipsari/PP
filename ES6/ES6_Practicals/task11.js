/* 11.	Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48
*/


function product(...theArgs) {
   return theArgs.reduce((previous, current) => {
     return previous * current;
   });
 }
 
const result = product (2,8,3); 
console.log(result);




//Write a function that calculates the sum of the elements of the array. 

function sum (...arg) {
   let total = 0;
   for (const elem of arg){
      total = total + elem;
   }
return total;

}

const result = sum (2,8,3); 
console.log(result);




