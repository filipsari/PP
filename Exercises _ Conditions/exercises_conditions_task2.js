/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0   */

var a = -5;
var b = 22;
var c = -6;
var d = 12;
var f = -1;

if (a > b && a > c && a > d && a > f) {
  console.log(a);
} else if (b > a && b > c && b > d && b > f) {
  console.log(b);
} else if (c > a && c > b && c > d && c > f) {
  console.log(c);
} else if (d > a && d > c && d > b && d > f) {
  console.log(d);
} else {
  console.log(f);
}
