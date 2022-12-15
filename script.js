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
  // section.style.display = 'flex';
  // section.style.gap = '16px';
  body.appendChild(section);
};

const createDiv = () => {
  for (let index = 0; index < 4; index += 1) {
    const section = document.getElementById('color-palette');
    const div = document.createElement('div');
    div.className = 'color';
    section.appendChild(div);
  }
};

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const saveColors = () => {
  const colors = document.getElementsByClassName('color');
  const savedColors = [];

  for (let index = 0; index < colors.length; index += 1) {
    savedColors.push(colors[index].style.backgroundColor);
  }

  localStorage.setItem('colorPalette', JSON.stringify(savedColors));
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
  saveColors();
};

const colorDivStorage = () => {
  const div = document.getElementsByClassName('color');
  const getLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < div.length; index += 1) {
    div[index].style.backgroundColor = getLocalStorage[index];
  }
};

const randomColorsBtn = () => {
  const section = document.querySelector('#color-palette');
  const button = document.createElement('button');
  button.id = 'button-random-color';
  button.innerHTML = 'Cores aleatórias';
  section.appendChild(button);
};

const clickBtn = () => {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', colorDiv);
};

const createDivMatriz = () => {
  const divMatriz = document.createElement('div');
  divMatriz.id = 'matriz';
  body.appendChild(divMatriz);
};

const generateCells = () => {
  const divMatriz = document.getElementById('matriz');

  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';

    for (let index1 = 0; index1 < 5; index1 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    divMatriz.appendChild(line);
  }
};

window.onload = () => {
  createTitle();
  createSection();
  createDiv();
  if (localStorage.getItem('colorPalette') === null) {
    colorDiv();
  } else {
    colorDivStorage();
  }
  randomColorsBtn();
  clickBtn();
  createDivMatriz();
  generateCells();
};
