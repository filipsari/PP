/********** IMPORTING from utils************ */

import { double, drink } from './utils.js';

console.log(double(6));
console.log(drink);


/**********  *********** */

import { double as utilsDouble, drink as utilsDrink } from './utils.js';

console.log(utilsDouble(6));
// console.log(double); will not work
console.log(utilsDrink);

/*********************************** */

// imports all 

import * as Utils from "./utils.js";
console.log(Utils.double(6));
console.log(Utils.drink);
/**************************************/

import {default as bottle} from "./utils.js";
// same as:    import bottle from "./utils.js";
console.log(bottle);

/********** AGGREGATES MODULES ****************/
/* avaliably multiply modules from single one */
import { informationData } from "./utils.js";
console.log(informationData());