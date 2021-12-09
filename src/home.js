import {createDiv} from './utility.js';
export {homePage};
export default homePage;

function homePage(str) {
        
    const div1 = createDiv(main,"photo");
    const pic = new Image();
 //   pic.src = Picture;
    pic.src = "food.avif";
    div1.appendChild(pic);

    const div2 = createDiv(main,"text");
    const p = document.createElement("p");
    p.innerHTML = str;
    div2.appendChild(p);
}

