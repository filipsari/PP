
class Travel {
  constructor (destination, days){
    this.destination = destination;
    this.days = days;
  }
  someMethod(){
    console.log(` I am travel to ${this.destination} and I will be there ${this.days} days`);
  }
}

/********** creating a instance ******** */
const put1 = new Travel ("Stuttgart", 5);

put1.someMethod();


/************* extends ********** */

class Visit extends Travel {
  constructor(destination, days, oprema){
    super (destination,days);
    this.oprema = oprema;
  }
  print(){
    super.someMethod();
    console.log(`bring your ${this.oprema.join(" and also your ")}`);
    
  }
}


/*********** instance of Visit **************** */
const put2 = new Visit ("Sahara", 3, ["camera" , "sun-glasses"]);
put2.print();



/*******  Destructuring Assignment *****************/

// taking some values from an Object

const lunch = {
  bread: "white",
  meat: "fish",
  chesse: "swiss",
  drink: "red vine"
}

let {meat, drink} = lunch; 

console.log(meat);
console.log(drink);

// change value in variables: 

meat = "chicken";
drink = "Coca-Cola";
console.log(meat);        // chicken
console.log(drink);       // Coca-Cola
console.log(lunch.meat);  // fish
console.log(lunch.drink);  // red vine



/*******  Destructuring Assignment - argumments from functions **************/

function showName(input) {
  console.log(`${input.name}`)   // there is a dot digging in the object. 
}

    const person1 = {
      name: "John", surname: "Snow"
      }
    
    showName(person1)
// calling the function and result is: John

//new way:
const person2 = {
  name: "Elizabeth", surname: "Walker"
  }
function showName( {name} ) {  //argument to this f. 
  console.log(`${name}`)
}

showName(person2)
// calling the function and result is: Elizabeth


/*******  Destructuring Assignment - ARRAYS **************/
const [first, second, third] = ["Apple", "Microsoft", "Samsung"];
console.log(first); // Apple
console.log(second); // Microsoft
console.log(third); // Samsung

// or just: 
const [ , , last] = ["Apple", "Microsoft", "Samsung"];
console.log(last); // Samsung
 

/*******  Functions **************/

const arr = [1, 2, 3, 4];
const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

const product = (a, b) => a * b;
console.log(product(2, 3)); // 6

const average = numbers => {
   const sum = numbers.reduce((a, b) => a + b);
   return sum / numbers.length;
};
console.log(average(arr)); // 2.5
/**********************************/

/******* REST OPERATORS *****************/

function sum (...unknow) {
console.log(unknow); // this is an array [ 5, 10, 20 ]
  let total = 0; 
  for (const n of unknow) {
    total += n;
  }
  return total; 
}

const result = sum (5, 10, 20);
console.log(result);

/*********************************** */
function numbers (first, ...rest) {
  console.log(first);  // 1 
  console.log(...rest); // 2,3,4,5,6
  console.log(rest); // [2,3,4,5,6]
}
numbers(1,2,3,4,5,6);
/*********************************** */

function numbers (first, ...rest) {
  console.log(first);  // [1,2,3]
  console.log(...rest); // [4,5,6]
  console.log(rest); // array[0 : [4,5,6]]
}
numbers([1,2,3],[4,5,6]);
/*********************************** */

function addingNumbers (numbers, newNumbers){
  console.log(numbers); // [ 1, 2, 3 ]
  numbers.push(newNumbers);
  console.log(numbers); // [ 1, 2, 3, [ 4, 5, 6 ] ]
}
addingNumbers([1,2,3],[4,5,6]);
/*********************************** */
function addingNumbers (numbers, newNumbers){
  console.log(numbers); // [ 1, 2, 3 ]
  numbers.push(...newNumbers); // destructuring an array [4,5,6] into 4,5,6. 
  console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

}
addingNumbers([1,2,3],[4,5,6]);
/*********************************** */


/**** Spread Operator ***************************************************/
//arrays:

const x = [ "a", "b","c"];
const y = [ "d","e","f"];
const xy = [ ...x, ...y];
console.log(xy); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
/************* */

// objects:
const morning = {
  breakfast: "Ham and eggs",
  lunch: "Burger"
}

const dinner = "Fish"

const backpackingMeals = {
  ...morning,
  dinner
}

console.log(backpackingMeals)

/************/

const arr1 = [1, 2];
const arr2 = [3, 4];
arr1.push(...arr2);
console.log(arr1); // [1, 2, 3, 4]

const date = [1983, 1, 9];
const birthday = new Date(...date);
console.log(birthday.toDateString()); // Wed Feb 09 1983



