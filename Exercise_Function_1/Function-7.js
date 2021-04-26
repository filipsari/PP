/* 7.	Write a program that calculates a number of digits of a given number. */

   // 1998 is four digits   
   
//The number of digits in 4567 is 4
//The number of digits in 423467 is 6
//The number of digits in 457 is 3

function calculatesNumberDigits (num) {
 
  var result = 0; 

  if (num >= 1) {
   result ++; 
 }

 if (num<1){
   num *= -1;
   result ++;
 }

 while (num / 10 >= 1) {
   num = num / 10;
   result++;
 }

 return result;
}

var a = calculatesNumberDigits(1998);
console.log(a);
