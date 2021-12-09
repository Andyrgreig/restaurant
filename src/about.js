import { createDiv } from "./utility";
export default aboutPage;


function aboutPage(arr) {
    const main = document.getElementById("main");
    const about = createDiv(main,"about");

    for (let i=0; i < arr.length; i++) {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = arr[i];
        about.appendChild(paragraph);
    }
}







