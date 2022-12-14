const body = document.querySelector('body');

const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Paleta de Cores';
  body.appendChild(title);
};

const createSection = () => {
  const section = document.createElement('section');
  section.id = 'color-palette';
  section.style.display = 'flex';
  body.appendChild(section);
};

const createDiv = () => {
  for (let index = 0; index < 4; index += 1) {
    const section = document.getElementById('color-palette');
    const div = document.createElement('div');
    div.className = 'color';
    div.style.border = 'solid 1px black';
    div.style.width = '20px';
    div.style.height = '20px';
    section.appendChild(div);
  }
};

const colorDiv = () => {
  const div = document.getElementsByClassName('color');
  for (let index = 0; index < div.length; index += 1) {
    if (index === 0) {
      div[index].style.backgroundColor = 'black';
    } else if (index === 1) {
      div[index].style.backgroundColor = 'green';
    } else if (index === 2) {
      div[index].style.backgroundColor = 'red';
    } else if (index === 3) {
      div[index].style.backgroundColor = 'blue';
    }
  }
};

window.onload = () => {
  createTitle();
  createSection();
  createDiv();
  colorDiv();
};
