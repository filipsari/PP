/*
1.	Write a for loop that will iterate from 0 to 15. For each iteration, 
it will check if the current number is odd or even, and display a message to the screen.
*/

for ( x = 0 ; x <= 15; x++ ) {
  if (x === 0){
    console.log("Number 0 is zero number");
  } else if  (x%2 === 0 && x !== 0)    {
    console.log("Number " + x + " is: even");  
  } else {
    console.log("Number " + x + " is: odd");
  }
}


 



