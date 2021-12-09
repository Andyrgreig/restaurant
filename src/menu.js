import { createDiv } from "./utility.js";
export default menuPage;


function menuPage(obj) {
    const main = document.getElementById("main");
    const menu = createDiv(main,"menu");
    main.appendChild(menu);

    const courses = Object.keys(obj);
    
    for (let i=0; i < courses.length; i++) {       
        const title = courses[i];
        const titleCapitalised = title.charAt(0).toUpperCase() + title.slice(1);
        const div = createDiv(menu,"");
        
        const h2 = document.createElement("h2")
        h2.innerHTML = titleCapitalised;
        div.appendChild(h2);

        for (let j=0; j < obj[title].length; j++) {
            const div2 = createDiv(div,"","dish");
            const div3 = createDiv(div);

            for (let k=0; k < obj[title][j].length; k++) {
            const paragraph = document.createElement("p");
            (k == 0 || k == 1) ? paragraph.className = "bold" : paragraph.className = "detail";
            paragraph.innerHTML = obj[title][j][k];
            (k == 0 || k == 1) ? div2.appendChild(paragraph) : div3.appendChild(paragraph);
            
            }
        }
    }
}

