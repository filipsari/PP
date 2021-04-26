
/* 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/



function convertAndOut (array) {
  var result=[];

  for(var index=0; index<array.length; index++) {
    var converted= parseFloat(array[index]);  // parseFloat pokusava da svaki element arraya pretvori u broj. 

    if(isFinite(converted)){
      result[result.length] = converted;   // prvi clan niza, tj nulti je jednako var converted... fakticki broj 1 za 0ti index  poslednji clan niza se uvek pise [result.length
    }
  }
return result;
  
}


console.log(convertAndOut(["1", "21", undefined, "42", "1e+3", Infinity]));


