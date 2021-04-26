/* 
1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function elementChecker (array, element) { 

   var answer = "No";

   for ( var i = 0;  i < array.length;  i++) {

      if (array[i] === element){
         var answer = "Yes";
         break;
      }
   }
   return answer;
  } 


var final = elementChecker ([1,2,3,4,5,6,7], 4);
console.log(final);

 