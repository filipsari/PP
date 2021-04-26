/* 5.	Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/


function nasaFunkcija (array) {
  var brojac = 0;

  for( var i = 0; i < array.length; i++) {
    var decimlaniBroj = parseFloat (array[i]);   // prva predefinisana funkcija  -22,5
    var celiBroj = parseInt (array[i]);     // druga predefinisana funkcija   -22,5 vidi kao -22 

    if ( !isNaN(decimlaniBroj) && celiBroj !== decimlaniBroj) {       // isNaN je treca predefinisana funkcija. Nije neBroj = broj. i ne smeju da budu jednaki jer da su jednaki u pitanju su oba cela broja
      brojac++;
    }
  }
    return brojac;
}

console.log( nasaFunkcija( [NaN, 23.1, 15, false, -22.5, '', 4, 7, null, 5.2, 34.6589]) );

