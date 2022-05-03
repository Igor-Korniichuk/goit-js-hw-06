const inputFontSizeEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

inputFontSizeEl.addEventListener('input', onChangeInputFontSize);
textSpanEl.style.fontSize = `${inputFontSizeEl.value}px`
function onChangeInputFontSize(event) {     
    textSpanEl.style.fontSize = `${event.currentTarget.value}px`;
}
