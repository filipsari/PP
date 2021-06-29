
var festival = new Festival;

var createMovieButton = document.querySelector("#create-movie");
var createProgramButton = document.querySelector("#create+program");
var addMovieToProgramButton = document.querySelector("add-movie"); 

var inputTitleElement = document.querySelector("#title"); 
var inputLengthElement = document.querySelector("#length");
var selectGenreElement = document.querySelector("#genre");

var movieErorrElement = document.querySelector("#movie-error");

var movieSelectElement = document.querySelector("#movie-selecting");

var ulMovieListElement = document.querySelector("movie-list");  

var inputDataElement = document.querySelector("#date");
var programErrorElement = document.querySelector("#program-error")

var ulProgramListElement = document.querySelector("#program-list");
var programSelectElement = document.querySelector("#program-select");

var selectMovieElement = document.querySelector("#movie-select");
var selectProgramElement = document.querySelector("#program-select");




function addMovie() {
  var titleVaule = inputTitleElement.value; 
  var lengthValue = inputLengthElement.value;
  var genreValue = selectGenreElement.value;
  
  if (!titleVaule) {
    movieErorrElement.textContent = "Title is required!";
    return; 
  }
  if (!genreValue){
    movieErorrElement.textContent = "Genre is required!";
    return;
  }
  if (!lengthValue){
    movieErorrElement.textContent = "Length is required!";
  }


  movieErorrElement.textContent = "";

  var movie = new Movie(titleVaule,lengthValue, genreValue);

  festival.listOfAllMovies.push(single_movie); 
  var index = festival.listOfAllMovies.length -1;

  var movieDataLi = document.createElement("li");
  movieDataLi.textContent = movie.getData(); 
  ulMovieListElement.appendChild(movieDataLi);

  var movieOption = document.createElement("option"); 
  movieOption.textContent = movie.title;
  movieOption.setAttribute( "value", index); 
  movieSelectElement.appendChild(movieOption); 

  inputTitleElement.value = " ";
  inputLengthElement.value = " ";
  selectGenreElement.value = " "; 
}



