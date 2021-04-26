/*
1.	Write a program that calculates the maximum of two given numbers. 

*/

//************  1  ****************/
function maxOfTwo (number1, number2) {
 
if (number1 > number2) {
  var max = number1;
  return max;
} else {
  var max2 = number2;
  return max2;
}
}

console.log(maxOfTwo(500,1335));


//************  2  ****************/
function maxOfTwo (number1, number2) {
 
  if (number1 > number2) {
    return number1;
  } else if (number1 === number2) {
     return "Numbers are equal"
  } else {
    return number2;
  }
  }
  
  console.log(maxOfTwo(500,500));


//************  3  ****************/

function maxOfTwoNumbers (a,b){

 if (a>b) {
   return a;
 }
 
 if (a<b){
   return b;
 }
 
return "Numbers are equal"
}

console.log(maxOfTwoNumbers(22,22));
