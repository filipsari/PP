/*

1.	Create constructor functions with properties representing the following:

○	Person: name, surname
○	Employee: inherits Person and has job and salary
○	Developer: inherits from Employee and has specialization
○	Manager: inherits from Employee and has department


*/

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.getFullName = function () {
  return this.name + " " + this.surname;
};

function Employee(name, surname, job, salary) {
  /*if (!name || !(name instanceof Person)) {
    throw new Error('Invalid name input')
  }
  if (!surname || !(surname instanceof Person)) {
    throw new Error('Invalid surname input')
  } */
  Person.call(this, name, surname);
  this.job = job;
  this.salray = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var employeeFirst = new Employee("Jovan", "Antic", "JSdeveloper", 300);
console.log(employeeFirst);

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecialization = function () {
  console.log("this is: " + this.specialization);
};

var developerFirst = new Developer(
  "Ana",
  "Peric",
  "JSdeveloper",
  1200,
  "full-stack"
);
console.log(developerFirst);

function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

var ourBoss = new Manager("Marko", "Tomic", "theBoss", 5000, "top-menagment");
console.log(ourBoss);

