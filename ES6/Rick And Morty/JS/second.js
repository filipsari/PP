let key = window.localStorage.getItem("id");

/*******************************************************
             I M A G E                                                           
*******************************************************/

fetch(`https://rickandmortyapi.com/api/character/${key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_js) {
    let h2 = document.querySelector("h2");
    let leftDiv = document.createElement("div");
    let rightDiv = document.createElement("div");
    let main = document.querySelector("main");
    let img = document.createElement("img");

    leftDiv.classList.add("left-div");
    rightDiv.classList.add("right-div");
    img.classList.add("image");
    img.setAttribute("src", obj_js.image);
    h2.textContent = obj_js.name;

    leftDiv.append(img);
    main.append(leftDiv);
  })
  .catch(function (error) {
    console.error("There was an error");
    console.log(error);
  });
