const bodyEl = document.querySelector('body');
const buttonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('span', '.color');

buttonChangeColorEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
