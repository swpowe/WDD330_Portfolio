console.log("script.js loaded.");

const baseURL = "https://swapi.dev/api/people/";
const mainSection = document.getElementById("results-list");
// let previousPage = '';
// let nextPage = '';


fetch(baseURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
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

function loadPreviousPage() {
    
}

function loadNextPage() {

}