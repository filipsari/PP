/* 11.	Write a program that concatenates a given string given number of times. 
For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */


function stringMultiply (word, number) {
  var result= "";

    for ( var i = 0; i< number ; i++) {
      result += word
    }

 return result; 
}

var final = stringMultiply( "Hello", 4);
console.log(final);




