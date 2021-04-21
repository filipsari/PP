/*

5.	Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];                         */



var a = [
  [1, 2, 1, 24], 
  [8, 11, 9, 4], 
  [7, 0, 7, 27]
  ];                         
  
  result="";
  
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      result += a[i][j] + "\t";
    }
  result += "\n"; 
  }
  
  console.log(result);



