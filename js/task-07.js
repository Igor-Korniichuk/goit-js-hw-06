const inputFontSizeEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

inputFontSizeEl.addEventListener('input', onChangeInputFontSize);

function onChangeInputFontSize(event) {     
    textSpanEl.style.fontSize = `${event.currentTarget.value}px`;
}
