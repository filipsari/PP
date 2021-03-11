/* 7.	Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city". */

var city = "Santa Marinella";

switch (city) {
  case "London":
  case "Liverpool":
  case "Manchester":
    console.log("This city is in: the United Kingdom");
    break;

  case "Stuttgart":
  case "Berlin":
  case "Munich":
    console.log("This city is in: Germany");
    break;

  case "Budapest":
  case "Szeged":
  case "Hodmezovasarhely":
    console.log("This city is in: Hungary");
    break;

  case "Aya Napa":
  case "Nikosia":
  case "Larnaca":
    console.log("This city is in: Cyprus");
    break;

  case "Rome":
  case "Venice":
  case "Santa Marinella":
    console.log("This city is in: Italy");
    break;

  default:
    console.log("Please choose a different city");
    break;
}
