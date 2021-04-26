/* 4.	Write a program that calculates an arithmetic mean of four numbers. */ 

//  aritmetic formula = (num1 + num2 + num3 + num4 ) / 4  

function aritmetic(num1, num2, num3, num4) {
  return console.log( "Aritmetic mean is: " + ((num1+num2+num3+num4)/4));
}

aritmetic(10,20,30,40);



//*******    2    *********** with unknown parameters /

function aritmeticGame () {
   
  var sum = 0;

  for (var i=0; i<arguments.length ; i++) {
    sum = sum + arguments[i];
   
  }
  final = sum / arguments.length; 
  return console.log(final);
}

aritmeticGame(10,20,30,40);