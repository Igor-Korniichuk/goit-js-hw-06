const refs = {
    inputNameEl: document.querySelector('#name-input'),
    outputNameEl: document.querySelector('#name-output'),
}
console.log(refs.inputNameEl);
console.log(refs.outputNameEl);

refs.inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event) {
       refs.outputNameEl.textContent = event.target.value ? event.target.value : "Anonymous";
}