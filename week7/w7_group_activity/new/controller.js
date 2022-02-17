console.log("controller loaded");

export default function controller() { //!! working but not really. Figure out one click spot
  let hikes = document.getElementsByClassName("light");
  for(var i = 0; i < hikes.length; i++) {
    //   hikes[i].addEventListener('click', (e) => {
    //     console.log(e.target.getAttribute("data-name"))
    //   })
      for(var j = 0; j < hikes[i].children.length; j++) {
          let child = hikes[i].children[j];
          child.addEventListener('click', (e) => {
            console.log(e.target.parentElement.getAttribute("data-name"));
            // console.log(e)
          })
      }
  }
}
