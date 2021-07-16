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