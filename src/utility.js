//import Picture from './images/food.avif';
import {homeText, aboutText, menuData} from './data.js';
import homePage from './home.js';
import aboutPage from './about.js';
import menuPage from './menu.js';

export {changePage, createDiv};


function createDiv(parent, id, className) {
    const div = document.createElement("div");
    if (id) div.id = id;
    if (className) div.className = className;
    parent.appendChild(div);
    return div;
}


function changePage() {
    const page = this.innerHTML;
    const main = document.getElementById("main");
    
    while (main.lastChild) {
	    main.removeChild(main.lastChild);
    }
    if (page === "Home") {
        homePage(homeText);
    } else if (page === "About") {
        aboutPage(aboutText);
    } else if (page === "Menu") {
        menuPage(menuData);
    }
}








