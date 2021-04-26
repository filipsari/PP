/* 9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]

*/

function deletingelements (a,e) {

var newArray=[];

for ( var i = 0; i<a.length; i++) {

  if (a[i] !== e) {
     newArray[newArray.length] = a[i];
  }

} 
return newArray;
}

var final = deletingelements([4, 6, 2, 8, 2, 2], 2);
console.log(final);