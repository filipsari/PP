/*
2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”   */

  function joinString (array) { 
    var validElements = [];

for( var i = 0;  i < array.length; i++) {
   //var isValidElement = 

   if (array[i] !== null && array[i] !== undefined && isFinite(array[i])  ) {
       validElements[validElements.length] = array[i];
   }

}
    //
    return validElements.join('');
  }

  console.log(joinString([NaN, 0, 15, false, -22, '', undefined, 47, null]));