console.log("script.js loaded.");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const div = document.querySelector(`div[data-key="${e.key}"]`);
  console.log(audio);
  if (!audio) return;
  div.classList.toggle('playing');
  audio.currentTime = 0;
  audio.play();

  audio.onended = (audio) => {
    //toggle class
    // console.log(audio.target)
    div.classList.toggle('playing');
  }
}

window.addEventListener("keydown", playSound);
