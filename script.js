const body = document.querySelector('body');
const div = document.getElementsByClassName('color');

const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Paleta de Cores';
  body.appendChild(title);
};
createTitle();

const createSection = () => {
  const section = document.createElement('section');
  section.id = 'color-palette';
  body.appendChild(section);
};
createSection();

const changeClass = (event) => {
  const color = document.getElementsByClassName('color');
  for (let index = 0; index < color.length; index += 1) {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    event.target.className = 'color selected';
    // color[index].classList.remove('selected');
  }
};

const createDiv = () => {
  for (let index = 0; index < 4; index += 1) {
    const section = document.getElementById('color-palette');
    const color = document.createElement('div');
    color.className = 'color';
    if (index === 0) {
      color.classList.add('selected');
    }
    color.addEventListener('click', changeClass);
    section.appendChild(color);
  }
};
createDiv();

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
randomColorsBtn();

const clickBtn = () => {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', colorDiv);
};
clickBtn();

const createClearButton = () => {
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  clearBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
  });
  body.appendChild(clearBtn);
};
createClearButton();

const createInput = () => {
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  label.innerText = 'Quantidade de Pixels';
  body.appendChild(label);
  label.appendChild(input);
};
createInput();

const changeMatriz = () => {

};

const createButton = () => {
  const btn = document.createElement('button');
  btn.id = 'generate-board';
  btn.innerText = 'VQV';
  btn.type = 'submit';
  btn.addEventListener('click', changeMatriz);
  body.appendChild(btn);
};
createButton();

const createDivMatriz = () => {
  const divMatriz = document.createElement('div');
  divMatriz.id = 'matriz';
  body.appendChild(divMatriz);
};
createDivMatriz();

const savePixelBoard = () => {
  const matriz = document.getElementById('matriz');
  localStorage.setItem('pixelBoard', matriz.innerHTML);
};

const paintPixel = (event) => {
  const palette = document.querySelector('.selected');
  const cor = palette.style.backgroundColor;
  event.target.style.backgroundColor = cor;
  savePixelBoard();
};

const generateCells = (valor) => {
  const divMatriz = document.getElementById('matriz');

  for (let index = 0; index < valor; index += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';

    for (let index1 = 0; index1 < valor; index1 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      // pixel.style.backgroundColor = 'white';
      pixel.addEventListener('click', paintPixel);
      line.appendChild(pixel);
    }
    divMatriz.appendChild(line);
  }
};

const reloadMap = () => {
  const matriz = document.getElementById('matriz');
  matriz.innerHTML = localStorage.getItem('pixelBoard');
};

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    colorDiv();
  } else {
    colorDivStorage();
  }

  if (localStorage.getItem('pixelBoard') === null) {
    generateCells(5);
  } else {
    reloadMap();
  }
};
