import Hikes from './hikes.js';
import controller from './new/controller.js';

//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
  controller() // loads the controller after window is rendered
});
