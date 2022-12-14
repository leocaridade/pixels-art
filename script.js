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
  section.style.gap = '16px';
  body.appendChild(section);
};

const createDiv = () => {
  for (let index = 0; index < 4; index += 1) {
    const section = document.getElementById('color-palette');
    const div = document.createElement('div');
    div.className = 'color';
    div.style.border = 'solid 1px black';
    div.style.width = '30px';
    div.style.height = '30px';
    section.appendChild(div);
  }
};

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const colorDiv = () => {
  const div = document.getElementsByClassName('color');
  for (let index = 0; index < div.length; index += 1) {
    if (index === 0) {
      div[index].style.backgroundColor = 'black';
    } else {
      div[index].style.backgroundColor = generateColor();
    }
  }
};

const randomColorsBtn = () => {
  const section = document.getElementById('color-palette');
  const button = document.createElement('button');
  button.id = 'button-random-color';
  button.innerHTML = 'Cores aleatórias';
  section.appendChild(button);
};
const clickBtn = () => {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', colorDiv);
};

window.onload = () => {
  createTitle();
  createSection();
  createDiv();
  colorDiv();
  randomColorsBtn();
  clickBtn();
};
