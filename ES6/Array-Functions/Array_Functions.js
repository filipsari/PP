
/****** - map() - *******/
let arr = [1, 2, 3, 4, 5];
let map1 = arr.map(x => x+10);
console.log(map1);
// [ 11, 12, 13, 14, 15 ]


/****** - filter() - *******/
let arr1 = [1, 2, 3, 4, 5];
let filter1 = arr1.filter(e => e>3);
console.log(filter1);
//[ 4, 5 ]


/****** - every() - *******/
let theirAges = [ 19, 16, 32, 45, 23, 28];
let test = theirAges.every(a => a>18);
console.log(test);
// false



/****** - some() - *******/
let theirAges = [ 19, 16, 32, 45, 23, 28];
let test = theirAges.some(a => a>18);
console.log(test);
// true


/****** - forEach() - *******/
let numbers = [1, 2, 3, 4];
numbers.forEach(myFunction);


function myFunction(item, index, arr) {
  arr[index] = item + 10;
}
console.log(numbers);
//[ 11, 12, 13, 14 ]

/****************************** */

let sum=0;
let numbers = [1, 2, 3, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  sum  += item;
}
console.log(sum); // 10 
console.log(numbers); //[ 1, 2, 3, 4 ]



/****** - reduce() - *******/
let reduceSum = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator+currentValue
})
console.log(reduceSum);
// 10  

let reduceSum = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator-currentValue
})
console.log(reduceSum);
// -10  

let reduceSum = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return currentValue + accumulator
})
console.log(reduceSum);
// 10  

let reduceSum = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return currentValue - accumulator
})
console.log(reduceSum);
// 2




