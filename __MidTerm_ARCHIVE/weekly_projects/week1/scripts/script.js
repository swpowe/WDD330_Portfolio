console.log("script.js loaded.");

let mainStory = document.getElementById("story");
let name = document.getElementById("story_name");
let message = document.getElementById("story_msg");
let textArea = document.getElementById("story_editor");

// let test = document.createElement('p');
// test.textContent = "this is a test";
// mainStory.appendChild(test);

function loadStory() {
  // get from localStorage

  let localStory = localStorage.getItem(name.value);

  if (localStory) {
    textArea.innerText = localStory;
    console.log(localStorage.getItem(name.value));
  } else {
    let msg = `I'm sorry. No article by the name '${name.value}' could be found. Please try again.`;

    // clear the name input
    name.value = "";
    displayMessage(msg, "error");
  }
}

function saveStory() {
  // save to localStorage
  localStorage.setItem(name.value, textArea.value);
  let msg = `Story named '${name.value}' has been successfully added to localStorage.`;
  displayMessage(msg, "success");

  console.log(`Story named '${name.value}' was saved to localStorage.`);

  // clear the name input
  name.value = "";
  textArea.value = "";
}

function displayStory() {
  // get from localStorage and append to mainStory
  
  // reset
  if(mainStory.childElementCount > 4) {
    mainStory.removeChild(mainStory.lastElementChild);
  }

  let storyDisplay = document.createElement("section");
  let story = document.createElement("p");

  story.innerHTML = textArea.value;

  storyDisplay.appendChild(story);
  mainStory.appendChild(storyDisplay);
}

function displayMessage(msg, type) {
  let errorDisplay = document.createElement("p");
  errorDisplay.classList.add(type);
  errorDisplay.innerText = msg;
  message.appendChild(errorDisplay);

  setTimeout(() => {
    message.innerHTML = "";
  }, 2000);
}
