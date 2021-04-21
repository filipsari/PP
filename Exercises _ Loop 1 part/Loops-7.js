/*

7.	Write a program that computes average marks of the following students. 
Then use this average to determine the corresponding grade. 
	
David	80
Marko	77
Dany	88
John	95
Thomas	68

The grades are computed as follows :

< 60%	F
< 70%	D
< 80%	C
< 90%	B
< 100%	A


*/


var array = [80, 77, 88, 95, 68];

// sum of elements / number of elements 

var sum = 0;
var formula = 0;

for (i=0; i < array.length; i++) { 
  sum = sum + array[i];
} 
formula = sum / array.length

if ( 0<formula && formula<=60) {
  console.log("Results is: F");
} else if (60<formula && formula<=70){
  console.log("Results is: D");
} else if ( (70<formula && formula<=80)){
  console.log("Results is: C");
} else if ( (80<formula && formula<=90)){
  console.log("Results is: B");
} else if ( (70<formula && formula<=80)){
    console.log("Results is: C");
} else {
  console.log("Results is: A");
}




