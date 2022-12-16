const body = document.querySelector('body');
const div = document.getElementsByClassName('color');

let selectedColor = 'black';

const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Paleta de Cores';
  body.appendChild(title);
};

const createSection = () => {
  const section = document.createElement('section');
  section.id = 'color-palette';
  body.appendChild(section);
};

const changeClass = (event) => {
  if (event.target.className === 'color') {
    event.target.className = 'color selected';
  } else {
    event.target.className = 'color';
  }
};

const createDiv = () => {
  for (let index = 0; index < 4; index += 1) {
    const section = document.getElementById('color-palette');
    const color = document.createElement('div');
    if (index === 0) {
      color.className = 'color selected';
    } else {
      color.className = 'color';
    }
    color.addEventListener('click', changeClass);
    section.appendChild(color);
  }
};
// console.log(div);
// div.addEventListener('click', (event) => {
//   event.target.className.innerText = 'selected';
// });

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

const clickBtn = () => {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', colorDiv);
};

const createDivMatriz = () => {
  const divMatriz = document.createElement('div');
  divMatriz.id = 'matriz';
  body.appendChild(divMatriz);
};

const paintPixel = (event) => {
  event.target.style.backgroundColor = selectedColor;
};

const generateCells = () => {
  const divMatriz = document.getElementById('matriz');

  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';

    for (let index1 = 0; index1 < 5; index1 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixel);
      line.appendChild(pixel);
    }
    divMatriz.appendChild(line);
  }
};

// const colorSelected = localStorage.getItem('colorPalette');
// console.log(colorSelected);

// const selectColor = () => {
//   const color = document.getElementsByClassName('color');
//   color.addEventListener('click', () => {

//   });
// };

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
  // selectColor();
};
