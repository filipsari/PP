/*1.	Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']
*/


function capitalize(...args) {
  let newArray = [];
 
  args.forEach(element => {

   newArray.push(element[0].toUpperCase() + element.slice(1));
  });
  return newArray;
}

let capitalizedArray = capitalize('hello', 'there', 'ES');

console.log(capitalizedArray);


//1.b. 

const ourArray = ["london", "paris", "beograd", 2021];

const capitalizeFirstLetter = element => {
  return element.filter( item => typeof item === "string").map( item => item[0].toUpperCase() + item.slice(1))
}

console.log(capitalizeFirstLetter(ourArray));



/*3.	Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
*/


let a = [4, 6, 11, -9, "reka ", 2.1]; 
let b = 2;

const increaseElement = (firstA, secondB = "planina") => firstA.map(   (element) => element + secondB);
console.log(increaseElement(a, b));


/*4.	Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/

let x = [6, 11, 9, 0, 3];
let y = [];


const evenNumbers = x => x.forEach( element => {
  if(element %2 === 0) {
     return y.push(element)
  } 
  
});

console.log(evenNumbers(y));



var arr = [6, 11, 9, 0, 3];

function even(a) {
  return a.filter(function (val) {
    return val % 2 === 0;
  });
}

console.log(even(arr));
