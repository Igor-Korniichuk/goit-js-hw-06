const bodyEl = document.querySelector('body');
const buttonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('span', '.color');

buttonChangeColorEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
