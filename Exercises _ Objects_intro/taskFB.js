/*// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

4. create a function that checks username and password and if it is correct print travel Blog comments*/

var myObject = {
  username: "Phill",
  password: "123",
};

var database = [myObject];

var travelBlogComments = [
  { 
    username: "Andrei",
    timeline: "I want to travel",
  },

  {
    username: "Franny",
    timeline: "Oh, It is summer time",
  },

  {
    username: "GreeceTraveler",
    timeline: "Sun on the beach...Yes",
  }
];

var userPromtChecker = prompt("What is your udername?");
var passwordPrompChecker = prompt("Please enter your password");

function signIn (user, pass) {
  if(user === database[0].username && pass === database[0].password) {
    console.log(travelBlogComments);
  } else {
    console.log("Wrong username or password");
  }
}

signIn(userPromtChecker, passwordPrompChecker);