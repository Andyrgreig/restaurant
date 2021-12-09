import { createDiv } from './utility';
export { createFooter };

function createFooter(input) {
  const contents = document.getElementById('contents');
  const footer = document.createElement('footer');
  contents.appendChild(footer);

  input.forEach(function (arr) {
    const div = createDiv(footer, '');

    for (let i = 0; i < arr.length; i++) {
      let elem;
      if (i == 0) {
        elem = document.createElement('h3');
      } else elem = document.createElement('p');
      elem.innerHTML = arr[i];
      div.appendChild(elem);
    }
  });
}
