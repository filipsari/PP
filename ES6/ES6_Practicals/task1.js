/*1.	Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']
*/

// 1.a
let cities = ["tokio", "madrid", 169, "rim"]; 

let strings = cities.filter(function (e) {
  return typeof e === "string"
});
console.log(strings);

let firstLetterCapitalize = strings.map(function(item) { return item[0].toUpperCase() + item.slice(1)} );
console.log(firstLetterCapitalize);

// 1.b

const ourArray = ["london", "paris", "beograd", 2021];

const capitalizeFirstLetter = element => {
  return element.filter( item => typeof item === "string").map( item => item[0].toUpperCase() + item.slice(1))
}
console.log(capitalizeFirstLetter(ourArray));

// 1. c

let someCities = ["moskva", "bern", 69, "budimpesta"]; 
const capitalizeFirst = someCities.filter(e => typeof e === "string").map(e => e[0].toUpperCase() + e.slice(1));
console.log(capitalizeFirst);

