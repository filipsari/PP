/*
2.	Write a program that checks if a given number is odd. */ 

function oneNumberChecker (number) {

if (number %2 !== 0) {
  var odd = "This number is odd";
  return odd;
} else {
  var even = "This number is even";
  return even;
}
}
console.log(oneNumberChecker(13));



//************* 2 *************/

function oneNumberChecker (number) {

  if (number %2 !== 0) {
    return "This number is odd";
  
  } else {
    return "This number is even";
  }
  
  }
  
  console.log(oneNumberChecker(13));


  //************* 3 ********************/

  function oneNumberChecker (number) {

    if (number %2 !== 0) {
      return console.log("This number is odd");
    
    } else {
      return console.log("This number is even");
    }
    
    }
    
    oneNumberChecker(72);


/*********4************* */

function oddNumbers (number) {


  if (number %2 !== 0) {
    return "This number is odd"; 
  } else if (number === 0) {
    return "This number is zero"
  } else {
    return "This number is even";
  }

}

var result = oddNumbers(0);
console.log(result);

 