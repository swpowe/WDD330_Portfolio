console.log("script.js loaded.");

const baseURL = "https://swapi.dev/api/people/";
const mainSection = document.getElementById("results-list");
// let previousPage = '';
// let nextPage = '';

getData(baseURL);
let previous = "";
let next = "";

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      previous = data.previous;
      next = data.next;
      console.log(previous);

      if (previous == null) {
        console.log('in if')
        document.getElementById("previous-button").disabled = true;
      }

      for (let i = 0; i < data.results.length; i++) {
        const item = data.results[i];
        displayItem(item);
      }

    })
    .catch((e) => {
      console.log(`There was an error. ${e}`);
    });

  function displayItem(item) {
    let div = document.createElement("div");

    div.innerHTML = `
    <h2>${item.name}</h2>
    <ul></ul>
    <li>Gender : ${item.gender}</li>
    <li>Height : ${item.height}</li>
    <li>Weight : ${item.mass}</li>
    <li>Hair Color : ${item.hair_color}</li>
    <li>Birth Year: ${item.birth_year}</li>
`;
    mainSection.appendChild(div);
  }
}

function loadPreviousPage() {
  console.log(previous);
  let list = document.getElementById("results-list");
  list.innerHTML = "";
  getData(previous);
}

function loadNextPage() {
  let list = document.getElementById("results-list");
  list.innerHTML = "";
  getData(next);
}

