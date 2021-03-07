

/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
  */

var a = 1;
var b = 3;
var c = 2;

if ((a>b)&&(a>c)&&(b>c))  {
    console.log(a,b,c);
} else if ( (a>b)&&(a>c)&&(b<c)) {
    console.log(a,c,b);
} else if ( (b>a)&&(a>c)&&(b>c)) {    
    console.log(b,a,c);
} else if ((b>c)&&(c>a)&&(b>a)) {     
    console.log(b,c,a);
} else if ((c<a)&&(a>b)&&(a>b))  {     
    console.log(c,a,b);
} else {
    console.log(c,b,a);
}










