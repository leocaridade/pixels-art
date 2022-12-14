const body = document.querySelector('body');

const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerHTML = 'Paleta de Cores';
  body.appendChild(title);
};

window.onload = () => {
  createTitle();
};
