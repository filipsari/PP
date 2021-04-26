/*   6.	Write a program that draws a horizontal chart representing three given values. 
For example, if values are 5, 3, and 7, the program should draw:

*/

function chart (x,y,z){

   var result = "";

   for(i=0; i<x; i++){
      result=result+"*" ; 
   }

   result = result + "\n"; // new line for the next parameter for loop

   for(i=0; i<y; i++) {
      result += "*";
   }

   result += "\n";

   for(i=0; i<z; i++) {
      result += "*";
   }
return console.log(result); 
}

chart(1,6,9);


/***** UNKNOWN PARAMETERS, SAME TASK *******/

function chart (){

   var result="";    

   for(i=0; i<arguments.length; i++) {   
 
      for( q=0; q<arguments[i]; q++) {    
         result+="*"; 
      }

   result+="\n";  
   }

return console.log(result);
}

chart(5,3,7);