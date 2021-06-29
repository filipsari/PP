
function Festival () {
  this.listOfAllMovies = [];
  this.listOfPrograms = [];
}




/*****************   MOVIE ***************** */



function Movie (title, length, genre) {
  this.title = title;
  this.lenght = parseInt(length); 
  this.genre = genre;
}


Movie.prototype.getGenreCode = function (){   
  var firstLetter = this.genre[0].toUpperCase();
  var lastLetter = this.genre[this.genre.lenght-1].toUpperCase();
  return firstLetter + lastLetter;
}

Movie.prototype.getData = function(){
  return this.title + " " + this.lenght + " " + this.getGenreCode();
}


/********** PROGRAM **************************** */
/* Under "Creating Program"
Date + Program to be added  

and then when choose Movie.
and when choose Program.

Add Movie to the Program

Under "Creating Program"
Date + Program to be added  
Date + 3 moives + duration: 390min
*/


function Program(date) {
  this.date = new Date(date);
  this.listOfmovies = [];
}

Program.prototype.lenghtOfAllmovies = function(){
  var howManyMinutes = 0;
  this.listOfMovies.forEach(function (item) {
    howManyMinutes += item.lenght;
  });
  return howManyMinutes;
}

Program.prototype.addMovie = function(single_movie){
  if (!single_movie || !(single_movie instanceof Movie)) {
    console.log("invalid error input");
    return;
} this.listOfMovies.push(single_movie);
  } 

Program.prototype.getTotalMovies = function(){
  return this.listOfMovies.lenght;
}

Program.prototype.getData = function() {
  var day = this.date.getDate();
  var month = this.date.getMonth()+1;
  var year = this.date.getFullYear();
  var date = day + '.' + month + '.' + year; 
  var result = date;
  if (this.getTotalMovies() === 0){
    result = date + ", Program to be announced.";
    return result;
  } result = date + " ," + this.getTotalMovies() + " movies, duration: " + this.lenghtOfAllmovies() + "min";
  
}



