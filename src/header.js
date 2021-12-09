import { changePage, createDiv } from './utility';
export { createHeader };

function createHeader(input) {
  const contents = document.getElementById('contents');
  const header = document.createElement('header');
  contents.appendChild(header);

  const div1 = createDiv(header, '');
  const div2 = createDiv(header, '');
  for (let i = 0; i < input.length; i++) {
    let elem;
    i === 0
      ? (elem = document.createElement('h1'))
      : (elem = document.createElement('h3'));
    elem.innerHTML = input[i];
    i === 0 ? div1.appendChild(elem) : div2.appendChild(elem);
    elem.addEventListener('click', changePage);
  }
}
