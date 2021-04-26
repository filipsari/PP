/*

4.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];     */

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var sum = "";

for ( var i = 0; i < x.length; i++){   // if we put  i<= x.length it will be one more "undefined" in the end as i=8 is, not exist "undefined", i max = 7 ; 

  sum = sum + " " + x[i];
 
}

 console.log(sum);


