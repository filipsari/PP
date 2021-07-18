//the old way:
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + " | " + this.length)
}
var travel = new Vacation("BIT HOLIDAY", 14);
travel.print(); 



// ES6 way:
class VacationES6 {
  constructor(destination, length) {
      this.destination = destination;
      this.length = length;
  }
  
  setMonth(month){
    this.month = month
  }
  
  getmonth(){
    return this.month;
  }

print() {
      console.log(`${this.destination} | ${this.length}`, this.getmonth())
  }
}

const travelVladan = new VacationES6("Hawaii", 22);
travelVladan.setMonth("Avgust"); 
travelVladan.print();

const travelFilip = new VacationES6("Maldives", 22);
travelFilip.setMonth("Avgust"); 
travelFilip.print();



const sandwich = {
  bread: "italian",
  meat: "tuna",
  cheese: "swiss",
  sauce: "ketchap" 
}
const { bread, meat } = sandwich
console.log(bread, meat) 

/* DESTRUCTURING ASSIGNMENT */

class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }
}

let person1 = new Person("Pera", "Peric", 22);


function printFullName(person) {
  /* let firstName = person.firstName
  let lastName = person.lastName */   //instead of this, in ES6 we can use this > let { firstName, lastName } = person;
  let { firstName, lastName } = person;
  console.log(`${firstName} ${lastName}`)
}

printFullName(person1);     //Pera Peric




class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = {
          street: "Topolska",
          number: 18,
          city: "Na vratima pise"
      }
  }
}

let person1 = new Person("Pera", "Peric", 22);

function printAddress(person) {
  let { street, number, city } = person.address;
  console.log(`${street}, ${number}, ${city}`)
}

function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`)
}

printFullName(person1)
printAddress(person1)


let dogs = ["Snaucer", "Samojed", "Haski"];

let [dog1, dog2] = dogs
console.log(dog1);  //Snaucer
console.log(dog2);  //Samojed       //if we want only Haski we will write let [, , dog3] = dogs


//The destructuring assignment allows you to locally scope fields within an object and to declare which values will be used. Consider this sandwich object. 


let clickHandler = function (e) {
    if (e.which === 13) {
        console.log("submit");
    }
}

//after DESTRUCTURING IS

let clickHandler = function ({ which }) {
    if (which === 13) {
        console.log("submit");
    }
}


//OR


let clickHandler = function ({ which: nameThatSuitsUs }) {
    if (nameThatSuitsUs === 13) {
        console.log("submit");
    }
}


