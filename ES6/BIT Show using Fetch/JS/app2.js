// TV MAZE API: /shows/:id/seasons(:id je dinamicki)
// primer za detalje: https://api.tvmaze.com/shows/169
// primer za sezone: https://api.tvmaze.com/shows/169/seasons
// primer za glumce: https://api.tvmaze.com/shows/169/cast
// primer za poseter: https://api.tvmaze.com/shows/82/images
// broj sezona = duzina response-a sa /shows/:id/seasons (data.length)

let key = window.localStorage.getItem("id");
let divContainer = document.querySelector(".container");
let leftDiv = document.querySelector(".left");
let rightDiv = document.querySelector(".right");
let h2 = document.querySelector(".titleH2");

/*******************************************************
            T I T L E                                                          
*******************************************************/

fetch(`https://api.tvmaze.com/shows/${key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_resp) {
    h2.textContent = obj_resp.name;
  })
  .catch(function (error) {
    console.error("An error happens");
    console.log(error);
  });
/************* end of T I T L E   **********************/

/*******************************************************
                  P O S T E R                                                          
*******************************************************/
fetch(`https://api.tvmaze.com/shows/${key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_resp) {
    let poster = document.createElement("img");
    poster.classList.add("image-size");
    // poster.classList = "image-size"; the same
    poster.setAttribute("src", obj_resp.image.original);
    leftDiv.append(poster);
    divContainer.append(leftDiv);
  })
  .catch(function (error) {
    console.log(error);
    console.error("An error happens");
  });
/************* end of P O S T E R   **********************/

/*******************************************************
                  SHOW DETAILS                                                          
*******************************************************/
fetch(`https://api.tvmaze.com/shows/${key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_resp) {
    let h3 = document.createElement("h3");
    h3.textContent = "Show Details";
    let paragraphDiv = document.createElement("div");
    paragraphDiv.classList.add("details");
    // paragraphDiv.setAttribute("class", "details");
    paragraphDiv.innerHTML = obj_resp.summary;
    divContainer.append(h3);
    divContainer.append(paragraphDiv);
  })
  .catch(function (error) {
    console.log(error);
    console.error("An error happens");
  });
/************* end of SHOW DETAILS **********************/

/*******************************************************
                  SHOW SEASONS                                                          
*******************************************************/

fetch(`https://api.tvmaze.com/shows/${key}/seasons`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_resp) {
    let number = obj_resp.length;
    let title = document.createElement("h4");
    title.textContent = `Seasons(${number})`;
    rightDiv.append(title);
    let ul = document.createElement("ul");

    obj_resp.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `${element.premiereDate} --- ${element.endDate}`;
      ul.append(li);
    });
    rightDiv.append(ul);
  })
  .catch(function (error) {
    console.log(error);
    console.error("An error happens");
  });

/************* end of SEASONS ************************/

/*******************************************************
                  CAST                                                         
*******************************************************/

fetch(`https://api.tvmaze.com/shows/${key}/cast`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj_resp) {
    let castTitle = document.createElement("h3");
    castTitle.innerText = "Cast";
    rightDiv.append(castTitle);

    let ul = document.createElement("ul");

    obj_resp.forEach((e) => {
      let li = document.createElement("li");
      li.textContent = e.person.name;
      ul.append(li);
    });
    rightDiv.append(ul);
  })
  .catch(function (error) {
    console.log(error);
    console.error("some err");
  });

/************* end of CAST ************************/
