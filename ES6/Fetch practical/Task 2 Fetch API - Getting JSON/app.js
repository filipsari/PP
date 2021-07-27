


 fetch("myFile.JSON").then( function(response1){
  return response1.json();  // JSON string is create as JS Object and return a Promise! 
}).then(function(obj_Java_Script){ // getting object
    console.log(obj_Java_Script.people[2].name); // Object, property: People --> 3 Arrays --> Object on each
}).catch(function(error){
  console.error("An error had happend")
  console.log(error);
})