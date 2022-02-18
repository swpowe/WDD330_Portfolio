import Comment from "./Comment.js";
import renderOneHikeFull from "../hikes.js"
import Hikes from '../hikes.js';
// import {renderOneHikeFull} from "../hikes.js";

console.log("view loaded");
// load comments on each hike for list view




// load comments for single hike view

// load comment form for single hike view

export function loadComments() {
    console.log('load comments loaded.')
    // for each main div
    // load comments
    let hikes = document.getElementsByClassName("light");
    for (let i = 0; i < hikes.length; i++) {
        
        const hike = hikes[i];
        console.log(hike)
        let p = document.createElement('p');
        p.innerHTML = 'this is a test';
        hike.appendChild(p)
    }
}

export function singleHikeView(hike) {
    console.log('single hike view called.');
    console.log(hike);
    
    let list = document.getElementById('hikes');
    list.innerHTML = '';

    // let singleHike = Hikes.showOneHike(hikeName)
    // console.log(singleHike);

    // get clicked on hike
    // use existing render one hike
    // renderOneHikeFull(hike)
}

// export default loadComments;
