/* 3.	Write a program that checks if a given number is a three digit long number. */ 

function digitLongChecker (Number) {
  if ( Number>99 && Number<1000) {
    return console.log("This is a three digit long number"); 

  } else if ( Number<-99 && Number>-1000) {
    return console.log("This is a three digit long number"); 
  } else {
    return console.log("This is not a three digit long number"); 
  }
}

digitLongChecker(-450);



/**********    2  ********** */

function isThreeDigitNumber (num) {
  var xyz = num; 

  if( xyz < 0 ) {
     xyz *= -1;    // xyz = xyz * (-1) ---> allows that every negative input number become positive value
  }

  if ( xyz > 99 && xyz < 1000) {
     return true;
  }
  
  return false;

}

console.log(isThreeDigitNumber(-222));