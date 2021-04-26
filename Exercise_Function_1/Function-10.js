/* 10.	Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */



function stringCaclulating (word) { 
  var counter = 0; 

  for ( var i = 0;  i<word.length; i++){
    if ( word[i] === "a") {
        counter++
    }
  }


return counter; 
}

var w=stringCaclulating("Now, we are calculating aaa");
console.log(w);



