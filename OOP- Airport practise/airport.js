"use stict";

(function () {
  // console.log("helllo");

  /**************** CONSTRUCTOR FUNCTIONS ************************** */

  function Person(name, surname) {
    if (!name || !surname) {
      throw new Error(" Inputs of name or surname is not correct");
    }

    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }

  //Add getData method to Person. It should return a formatted string containing the name and surname of the person."John", "Snow" -> "John Snow”

  /*---------------------------------------------------------------*/

  function Seat(number, category) {
    category = category || "e"; //If category is not provided for Seat, assume it’s economy (“e”).
    number = number || Math.floor((100 - 10) * Math.random() + 10); //If seat number is not provided, assign a random number between 10 and 100. ( (max-min) * Math.random() + min )

    if (!number || !category) {
      throw new Error("Inputs of person or seat is not correct");
    }

    if (!["e", "b"].includes(category)) {
      //The includes()method determines if an array includes a certain value,returning true or false
      throw new Error(" seat category is not 'e' or 'b' ");
    }

    this.number = number;
    this.category = category;
    this.getData = function () {
      return this.number + " " + this.category.toUpperCase(); //Add getData method to Seat. It should return a formatted string containing a seat number and category. 12, "B" -> "12, B”
    };
  }

  /*---------------------------------------------------------------*/

  function Passanger(person, seat) {
    if (!person || !(person instanceof Person)) {
      throw new Error(" person is not instance of Person or wrong input");
    }
    if (!seat || !(seat instanceof Seat)) {
      throw new Error(" seat is not instance of Seat or wrong input");
    }
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + " " + this.person.getData(); //// this.seat.getData() is equal with this.getData() from Seat, same as person.
    };
  }

  //Add getData method to Passenger. It should return a formatted string containing a seat number, category letter (always in uppercase), a name and surname. To display seat data, use getData method of the Seat object. The same goes for the person data.personObj, seatObj -> 12, B, John Snow

  /*---------------------------------------------------------------*/

  function Flight(relation, date) {
    if (!relation || !date) {
      throw new Error("wrong input for relation and date in Flight");
    }
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassangers = [];
    this.addPassenger = function (somePassenger) {
      if (!somePassenger || !(somePassenger instanceof Passanger)) {
        throw new Error("your passenger is not a instance of Passanger");
      }
      this.listOfPassangers.push(somePassenger); // 	flight1.addPassenger(passenger1);
    };
    this.getData = function () {
      var result = "";
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      result +=
        "\t" + day + "." + month + "." + year + ", " + this.relation + "\n";

      this.listOfPassangers.forEach(function (somePassenger) {
        result += "\t\t" + somePassenger.getData() + "\n"; // taking getData() --> from Passanger () = this.seat.getData() + this.person.getData()
      });
      return result;
    };

    this.numberOfPassengers = function () {
      return this.listOfPassangers.length;
    };
  }
  //Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list of a given flight.

  /*Add getData method to Flight. It should return a formatted string containing a date, relation, all data related to the flight and list of passengers with their data.
25.10.2017, Belgrade - Paris
		1, B, John Snow
		2, E, Cersei Lannister
*/
  /*---------------------------------------------------------------*/

  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (someFlight) {
      //flight1
      if (!someFlight || !(someFlight instanceof Flight)) {
        throw new Error("some Flight must be instance of Flight");
      }
      this.listOfFlights.push(someFlight);
    };

    this.numberOfAllPassengers = function () {
      var counting = 0;
      this.listOfFlights.forEach(function (someFlight) {
        counting += someFlight.numberOfPassengers();
      });

      return counting;
    };

    this.getData = function () {
      var result =
        "Airport: " +
        this.name +
        " Number of passengers: = " +
        this.numberOfAllPassengers() +
        "\n";
      this.listOfFlights.forEach(function (someFlight) {
        result += someFlight.getData(); //take data from Flight getData()  ----> sve ono prepisano iz Flight getData()
      });
      return result;
    };
  }

  //Add addFlight method to Airport. It should add the flight to the list of flights of the airport.

  /*---------------------------------------------------------------*/

  /*Inside your immediately-invoking function, add createFlight function that receives a relation (ex. Belgrade - New York) and date as parameters and returns a created Flight.

Inside your immediately-invoking function, add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger.
*/

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, surname, seatNumber, seatcategory) {
    var person = new Person(name, surname);
    var seat = new Seat(seatNumber, seatcategory);
    return new Passanger(person, seat);
  }

  // testing
  /*---------------------------------------------------------------*/
  // var osoba1 = new Person ("Joko", "Ono");
  // var sediste1 = new Seat ( ); // if not defined { number: 77, category: 'e' }
  // var putnik1 = new Passanger(osoba1,sediste1);
  // console.log(putnik1);
  // console.log(osoba1.getData());
  // console.log(sediste1.getData());
  // console.log(putnik1.getData());
  /*---------------------------------------------------------------*/

  // console.log(airport.name);
  /*---------------------------------------------------------------*/
  // testing witout create Flight function:
  // var flight1 = new Flight("Belgrade - Paris", 'Oct 25 2017');
  // flight1.addPassenger(putnik1);
  // console.log(flight1.getData());
  /*---------------------------------------------------------------*/

  /*Create two instances of the Flight object using the createFlight function and the following data:
relation: "Belgrade - New York" 		date: "Oct 25 2017"
relation: "Barcelona - Belgrade" 		date: "Nov 11 2017"

Create four instances of the Passenger object using the createPassenger function with the following data: 
Name: "John" 	surname: "Snow" 		seat number: 1		category: "b"
Name: "Cersei" 	surname: "Lannister" 	seat number: 2		category: "b"
Name: "Daenerys" 	surname: "Targaryen" 	seat number: 14	
Name: "Tyrion" 	surname: "Lannister" 	

*/
  try {
    //In you main program function, create an instance of the Airport object:
    var airportBelgrade = new Airport();
    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("tyrion", "Lannister");
    //Add the first two passengers to the first flight and the second two to the second flight using the Flight’s addPassenger method:
    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);
    //Add the created flight instances to the airport using Airport’s addFlight method:
    airportBelgrade.addFlight(flight1);
    airportBelgrade.addFlight(flight2);
    //Call Airport’s getData method to display the airport data output in the following manner:
    console.log(airportBelgrade.getData());
  } catch (error) {
    console.log("Error message: " + error.message);
  }
})();
