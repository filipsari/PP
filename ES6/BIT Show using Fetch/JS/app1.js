const endpoint = "https://api.tvmaze.com/shows";
const endpointSearch = "https://api.tvmaze.com/search/shows?q=:";
const baseUrl = "https://api.tvmaze.com";

let mainDiv = document.querySelector(".main-div");

let top50 = [];

fetch("https://api.tvmaze.com/shows")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    let sortedShow = obj.sort(function (x, y) {
      return y.rating.average - x.rating.average;
    });
    let top50 = sortedShow.slice(0, 50);
    top50.forEach((element) => {
      let small_div = document.createElement("div");
      small_div.setAttribute("data-our-key", element.id);
      small_div.classList = "tv-div";
      let image = document.createElement("img");
      image.setAttribute("src", element.image.medium);
      let title = document.createElement("h3");
      title.textContent = element.name;
      small_div.append(image);
      small_div.append(title);
      mainDiv.append(small_div);
    });
    let divs = document.querySelectorAll(".tv-div");

    divs.forEach(function (e) {
      e.addEventListener("click", () => {
        let key = e.getAttribute("data-our-key");
        window.localStorage.setItem("id", key);
        document.location = "second.html";
      });
    });
  })
  .catch(function (error) {
    console.log(error);
  });

/*******************************************************
                S E A R C H                                                         
*******************************************************/

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let ul = null;

const input_search = document.getElementById("btnSearch");

input_search.addEventListener("keyup", function (event) {
  fetch(`${baseUrl}/search/shows?q=${event.target.value}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (obj_js) {
      const searchResults = document.querySelector(".search-results");

      if (searchResults && searchResults.children.length > 0) {
        console.log(searchResults);
        removeAllChildNodes(searchResults);
      }

      if (!searchResults) {
        ul = document.createElement("ul");
        ul.classList.add("search-results");
        mainDiv.append(ul);
      }

      obj_js.forEach(function (element) {
        let li = document.createElement("li");
        li.classList.add("single-result");
        li.innerText = element.show.name;
        li.setAttribute("data-our-key", element.show.id);
        ul.append(li);
        // console.log(li);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

/************* end S E A R C H **********************/

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("single-result")) {
    const key1 = event.target.getAttribute("data-our-key");

    window.localStorage.setItem("id", key1);
    document.location = "second.html";
  }
});

/************* The End **********************/
