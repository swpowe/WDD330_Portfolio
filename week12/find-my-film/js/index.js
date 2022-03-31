const api_key = "4837289fe85d3a90bd7258266f7e743c";
const base_url = "https://api.themoviedb.org/3";
const image_base = "https://image.tmdb.org/t/p/";
let displayResultsNum = 3;
let imageSize = "w200";

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
});

buildGenreList();

// function getMovie() {
//   let form = new FormData(document.getElementById("search-form"));
//   document.getElementById("search-form").reset();
//   console.log(form.get("genres"));

//   // const base_url = 'https://api.themoviedb.org/3/movie/{{movieID}}?api_key={{movieDB}}'

//   // const image_base = 'https://image.tmdb.org/t/p/w200/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg';

//   let movieID = 500;

//   if (form.get("top-results") != null)
//     displayResultsNum = form.get("top-results");

//   for (var i = 0; i < displayResultsNum; i++) {
//     movieID++;
//     fetch(`${base_url}/movie/${movieID}?api_key=${api_key}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         let output = document.getElementById("output-section");
//         let imagePath = data.poster_path;

//         const div = document.createElement("div");
//         div.classList.add("output-section-movie");
//         const img = document.createElement("img");
//         img.src = `${image_base}/${imageSize}${imagePath}`;

//         div.appendChild(img);
//         output.appendChild(div);
//       });
//   }
// }

// function search() {
//   fetch(
//     "https://api.themoviedb.org/3/search/movie?api_key=4837289fe85d3a90bd7258266f7e743c&language=en-US&query=lost&page=1&include_adult=false"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

function discover() {
  let form = new FormData(document.getElementById("search-form"));
  // let max_runtime = form.get('runtime');
  console.log(form.get("runtime"));
  let max_runtime = 280;
  let genre = form.get("genres");
  console.log(genre);

  if (form.get("top-results") != null)
    displayResultsNum = form.get("top-results");

  if (form.get("runtime") != null)
    maxRuntime = form.get("runtime");
  console.log(`Runtime: ${maxRuntime}`);

  let url = `${base_url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_runtime.lte=${maxRuntime}&with_watch_monetization_types=flatrate˝`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("results", JSON.stringify(data));
      displayResults(data);
    });
}

function displayResults(data) {
  let output = document.getElementById("output-section");
  output.innerHTML = "";

  for (let i = 0; i < displayResultsNum; i++) {
    const item = data.results[i];
    let imagePath = item.poster_path;

    const div = document.createElement("div");
    div.classList.add("output-section-movie");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.onclick = detailedView;
    img.src = `${image_base}/${imageSize}${imagePath}`;
    img.setAttribute("data-movieID", item.id);

    a.appendChild(img);
    div.appendChild(a);
    output.appendChild(div);

  }
}

async function buildGenreList() {
  // // build drop down genre list from api list
  let url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4837289fe85d3a90bd7258266f7e743c&language=en-US";

  const data = await fetchFunction(url);
  // console.log(data.genres);
  for (var i = 0; i < data.genres.length; i++) {
    let obj = data.genres[i];
    // console.log(obj);
    // add key and value to drop down object
    let list = document.getElementById("genres-select");
    let option = document.createElement("option");
    option.value = `${obj.id}`;
    option.text = `${obj.name}`;
    list.appendChild(option);
  }
}

async function fetchFunction(url) {
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    });
  return response;
}

function detailedView(e) {
  const movieID = e.target.getAttribute("data-movieID");
  console.log(`Movie ID : ${movieID}`);
  const outputSection = document.getElementById("output-section");
  const backButton = document.createElement("button");
  const section = document.createElement("section");
  const div = document.createElement("div");

  section.classList.add("detailed-view-section");

  backButton.textContent = "Back";
  backButton.addEventListener("click", () => {
    // history.back();
    reloadResults();
    //!! change this to use localstorage? store search results then reload on back??
  });

  div.innerHTML = "<p>Details Here</p>";
  div.id = "details";
  outputSection.innerHTML = "";
  section.appendChild(e.target);
  section.appendChild(div);
  section.appendChild(backButton);
  outputSection.appendChild(section);

  getMovie(movieID);
}

function getMovie(id) {
  fetch(`${base_url}/movie/${id}?api_key=${api_key}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let output = document.getElementById("details");
      output.innerHTML = `
        <p id="details-title">${data.original_title}</p>
        <p id="details-title">${data.overview}</p>
        <p id="details-overview">Rating: ${data.vote_average} / 10</p>
        <p id="details-overview">${data.runtime} mins</p>
        <p id="details-overview">${data.release_date}</p>

        `;
      // output.appendChild(div);
    });
}

function reloadResults() {
  // read from local storage
  // display results
  document.getElementById("search-form").reset();
  let data = JSON.parse(localStorage.getItem("results"));
  displayResults(data);
}

function addToWatchList() {
  // user can add to locally saved watch list
}
