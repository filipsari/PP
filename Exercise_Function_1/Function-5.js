
/* 5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****


i=0,j=0  i=0,j=1  i=0,j=2  i=0,j=3  i=0,j=4  
   *        *        *        *         *

i=1,j=0  i=1,j=1  i=1,j=2  i=1,j=3  i=1,j=4  
   *                                   *

i=2,j=0  i=2,j=1  i=2,j=2  i=2,j=3  i=2,j=4  
   *                                   *       

i=3,j=0  i=3,j=1  i=3,j=2  i=3,j=3  i=3,j=4 
   *                                   *

i=4,j=0  i=4,j=1  i=4,j=2  i=4,j=3  i=4,j=4  
   *        *        *        *         *

*/

function drawing (number) {

 var draw ="";

 for(var i=0; i<number; i++) {

    for(var j=0; j<number; j++) {

      if(i===0 || i=== number-1 ) {
         draw += "* ";  
      } else if(j===0 || j=== number-1 ) {
         draw += "* " ; 
      } else {
         draw += "  "; 
      }
      }
      draw += "\n"
   }    
return draw;

}

console.log(drawing(5));


//****** all stars *********************/
function drawing (number) {

   var draw ="";
  
   for(var i=0; i<number; i++) {
      for(var j=0; j<number; j++){
        draw +="*"
      }
      
      draw+="\n" // here, means 5 * in vertical line 
   }   
  return draw;
  
  }
  
  console.log(drawing(5));


  //************part of it ************ */

  
function drawing (number) {

   var draw ="";
  
   for(var i=0; i<number; i++) {
      draw +="*"
      draw +="\n" // here, means 5 * in vertical line 
   }    draw +="\n"  // here, in the first horizontal line is *****
  return draw;
  
  }
  
  console.log(drawing(5));