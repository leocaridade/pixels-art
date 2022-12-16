const body = document.querySelector('body');
const div = document.getElementsByClassName('color');

let selectedColor = 'black';

const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Paleta de Cores';
  body.appendChild(title);
};

const seila = () => {
  // const section = document.getElementById('color-palette');
  // for (let index = 0; index < section.length; index += 1) {
  //   // selectedColor = event.target[index].style.backgroundColor;
  // }
};

const createSection = () => {
  const section = document.createElement('section');
  section.id = 'color-palette';
  section.addEventListener('click', seila);
  body.appendChild(section);
};

const changeClass = () => {
  for (let index = 0; index < div.length; index += 1) {
    if (div[index].className === 'color selected') {
      div[index].classList.remove('selected');
    }
    if (div[index].className === 'color') {
      div[index].className += ' selected';
    }
    div[index].className = '';
  }
  // if (event.target.classList.contains('selected')) {
  //   event.target.classList.remove('selected');
  // } else {
  //   event.target.classList.add('selected');
  // }
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
const colorSelected = () => {
  const selected = document.querySelector('.selected');
  selected.style.width = '60px';
  selected.style.height = '60px';
  console.log(selected);
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

const createClearButton = () => {
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  clearBtn.addEventListener('click', () => {
    // localStorage.clear();
    window.location.reload();
  });
  body.appendChild(clearBtn);
};

const createDivMatriz = () => {
  const divMatriz = document.createElement('div');
  divMatriz.id = 'matriz';
  body.appendChild(divMatriz);
};

const paintPixel = (event) => {
  const palette = document.querySelector('.selected');
  const cor = palette.style.backgroundColor;
  event.target.style.backgroundColor = cor;
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
  createClearButton();
  createDivMatriz();
  generateCells();
  colorSelected();
};
