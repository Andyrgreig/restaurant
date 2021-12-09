import './style.css';
import { createDiv } from './utility.js';
import { createHeader } from './header.js';
import { createFooter } from './footer.js';
import { homePage } from './home.js';
import { footerData, headerData, homeText } from './data.js';

function initialisePage() {
  const contents = document.getElementById('contents');
  createHeader(headerData);
  createDiv(contents, 'main');
  homePage(homeText);
  createFooter(footerData);
}


initialisePage();
