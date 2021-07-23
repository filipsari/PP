
 function double (n) {
   return n * 2
 };

 function message()  {
   console.log("Welcome, friend!");
 }; 

 let drink = "Tonic Water"; 

 /*********** EXPORTING THIS *********** */

 export function double (n) {
  return n * 2
};

export function message()  {
  console.log("Welcome, friend!");
}; 

// export let drink = "Tonic Water";
/************************************* */ 

// or you can do this: 

 function double (n) {
   return n * 2
 };

 function message()  {
   console.log("Welcome, friend!");
 }; 

 let drink = "Tonic Water"; 

// export { double, message, drink}; 
// /*****************************************/

 export default drink;

/********** AGGREGATES MODULES ****************/
/* avaliably multiply modules from single one */
export {informationData} from "./helper.js" 
