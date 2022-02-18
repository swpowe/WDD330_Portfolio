import * as viewHelper from './view.js';


console.log("controller loaded");

export default function controller() {
  //!! This could be cleaned up
  
  
  let hikes = document.getElementsByClassName("light");
  let hikeName = ''
  for (var i = 0; i < hikes.length; i++) {
    hikes[i].addEventListener("click", (e) => {
      let name = e.target.getAttribute("data-name");
      if (name != null) {
        console.log(e.target.getAttribute("data-name"));
        return hikeName;
      }
    });
    for (var j = 0; j < hikes[i].children.length; j++) {
      let child = hikes[i].children[j];
      child.addEventListener("click", (e) => {
        let name = e.target.parentElement.getAttribute("data-name");
        if (name != null) {
          console.log(name);
          return hikeName;
        }
      });
    }
  }
  let images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
      let name = e.target.parentElement.parentElement.getAttribute("data-name");
      if (name != null) {
        console.log(name);
        viewHelper.singleHikeView(e);
        return hikeName;
      }
    });
  }
//   view(); //!! currently loads the view loadcomments()
}
