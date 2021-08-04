// import {myFunction, customFetch} from './methods.js';

let main = document.querySelector("main");
let mainDiv = document.querySelector(".container");

// customFetch("https://rickandmortyapi.com/api/character").then(obj_js => {
//   const{results} = obj_js;
//   console.log({results});

// console.log({fetchAllCharacters}); // isto sto i: console.log('fetchAllCharacters: ', fetchAllCharacters)

fetch("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_js) {
    const { results } = obj_js;

    results.forEach(function (element) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("h4");

      img.setAttribute("src", element.image);
      img.classList.add("image");
      div.classList.add("single_div");
      div.setAttribute("data-key", element.id);
      name.classList.add("characterName");
      name.textContent = element.name;

      div.append(img);
      div.append(name);
      mainDiv.append(div);
      main.append(mainDiv);
    });

    // myFunction();

    let divs = document.querySelectorAll(".single_div");

    divs.forEach(function (for_every_div) {
      for_every_div.addEventListener("click", function () {
        let key = for_every_div.getAttribute("data-key");
        window.localStorage.setItem("id", key);
        document.location = "second.html";
      });
    });
  })
  .catch(function (error) {
    console.error("some error happend");
    alert("Error occured, please reload the page");
  });
